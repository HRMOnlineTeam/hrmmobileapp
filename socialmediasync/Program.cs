using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SocialMediaSync
{
    class Program
    {
        static string _appId = "1652040471765491";
        static string _appSecret = "d517d08996a8c7a10a8c50b93a27b983";
        static string _targetPage = "HopeRestorationMinistries";
        static string _fireBaseUrl = "https://hrmonlineapp.firebaseio.com/";

        //static string _permissions = "user_about_me,read_stream,publish_stream"; 

        static void Main(string[] args)
        {
            _appId = ConfigurationManager.AppSettings["fbAppId"];
            _appSecret = ConfigurationManager.AppSettings["fbAppSecret"];
            _targetPage = ConfigurationManager.AppSettings["fbPage"];
            _fireBaseUrl = ConfigurationManager.AppSettings["fireBaseUrl"];

            string feedGraph = ConfigurationManager.AppSettings["fbFeedGraph"];
            string postGraph = ConfigurationManager.AppSettings["fbPostsGraph"];
            string eventGraph = ConfigurationManager.AppSettings["fbEventsGraph"];

            WebClient webClient = new WebClient();

            StringBuilder feedRequest = new StringBuilder();
            feedRequest.AppendFormat("https://graph.facebook.com/{0}", _targetPage);
            feedRequest.Append(feedGraph);
            feedRequest.AppendFormat("access_token={0}|{1}", _appId, _appSecret);
            string feedResponseData = webClient.DownloadString(feedRequest.ToString());

            if(feedResponseData != null)
            {
                SaveData(_fireBaseUrl + "fbdata/feed.json", feedResponseData);
            }

            StringBuilder postsRequest = new StringBuilder();
            postsRequest.AppendFormat("https://graph.facebook.com/{0}", _targetPage);
            postsRequest.Append(postGraph);
            postsRequest.AppendFormat("access_token={0}|{1}", _appId, _appSecret);
            string postsResponseData = webClient.DownloadString(postsRequest.ToString());

            if (postsResponseData != null)
            {
                SaveData(_fireBaseUrl + "fbdata/posts.json", postsResponseData);
            }

            StringBuilder eventsRequest = new StringBuilder();
            eventsRequest.AppendFormat("https://graph.facebook.com/{0}", _targetPage);
            eventsRequest.Append(eventGraph);
            eventsRequest.AppendFormat("access_token={0}|{1}", _appId, _appSecret);
            string eventsResponseData = webClient.DownloadString(eventsRequest.ToString());

            if (eventsResponseData != null)
            {
                SaveData(_fireBaseUrl + "fbdata/events.json", eventsResponseData);
            }
            
        }

        public static void SaveData(string baseurl, string data)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(baseurl);
            request.Method = "PUT";
            request.Accept = "application/json";
            //request.Credentials = new NetworkCredential(username, password);
            request.UserAgent = "curl/7.37.0";
            request.ContentType = "application/x-www-form-urlencoded";

            using (var streamWriter = new StreamWriter(request.GetRequestStream()))
            {
                streamWriter.Write(data);
            }

            var response = request.GetResponse();
            string text;

            using (var sr = new StreamReader(response.GetResponseStream()))
            {
                text = sr.ReadToEnd();
            }

        }
    }
    
}
