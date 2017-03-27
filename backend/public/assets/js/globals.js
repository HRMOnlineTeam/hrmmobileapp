   window.hrmonline = {};

   window.hrmonline.campuses = [{
           id: "HRM-Chloorkop",
           desc: "Chloorkop"
       },
       {
           id: "HRM-Tembisa",
           desc: "Tembisa"
       },
       {
           id: "HRM-Roodepoort",
           desc: "Roodepoort"
       },
       {
           id: "HRM-Midrand",
           desc: "Midrand"
       },
   ];

   window.hrmonline.personstatuses = [{
           id: "pers-visitor",
           desc: "Visitor",
           stage: "Win"
       },
       {
           id: "pers-new-convert",
           desc: "New Convert",
           stage: "Win"
       },
       {
           id: "pers-interest-member",
           desc: "Interested in Membership",
           stage: "Win"
       },
       {
           id: "pers-member-101",
           desc: "Member - Hope 101",
           stage: "Win"
       },
       {
           id: "pers-member-encounter",
           desc: "Member - Encounter",
           stage: "Win"
       },
       {
           id: "pers-member-babtism",
           desc: "Member - Babtised",
           stage: "Win"
       },
       {
           id: "pers-member-post-encounter",
           desc: "Member - Post Encounter",
           stage: "Establish"
       },
       {
           id: "pers-servant",
           desc: "Servant",
           stage: "Establish"
       },
       {
           id: "pers-marriage-by-design",
           desc: "Marriage by God's Design",
           stage: "Disciple",
           prerequisites: "{marritalstatus:married}"
       },
       {
           id: "pers-marriage-fan-flame",
           desc: "Fan the Flame",
           stage: "Disciple",
           prerequisites: "{marritalstatus:married}"
       },
       {
           id: "pers-marriage-annointed",
           desc: "Annointed Marriage",
           stage: "Disciple",
           prerequisites: "{marritalstatus:engaged}"
       },
       {
           id: "pers-marriage-separated",
           desc: "Recovery Dynamics",
           stage: "Disciple",
           prerequisites: "{marritalstatus:separated}"
       },
       {
           id: "pers-equip-leader-course",
           desc: "Ministry Course",
           stage: "Send"
       },
       {
           id: "pers-equip-leader-impart",
           desc: "Ministerial Impartation",
           stage: "Send"
       }
   ]


   window.hrmonline.servicerequesttypes = [{
           id: "req-type-prayer",
           desc: "Prayer"
       },
       {
           id: "req-type-counseling",
           desc: "Counseling"
       },
       {
           id: "req-type-new-commit",
           desc: "Commit my Life"
       },
       {
           id: "req-type-be-member",
           desc: "Become Member"
       },
       {
           id: "req-type-babtism",
           desc: "Get Babtised"
       },
       {
           id: "req-type-serve",
           desc: "Want to Serve"
       },
       {
           id: "req-type-question",
           desc: "General Question"
       },
   ]

   window.hrmonline.servicerequestsources = [{
           id: "req-src-email",
           desc: "Email"
       },
       {
           id: "req-src-sms",
           desc: "SMS"
       },
       {
           id: "req-src-app",
           desc: "Mobile App"
       },
       {
           id: "req-type-in-person",
           desc: "In Person"
       }
   ];

   window.hrmonline.servicerequeststatuses = [
       {
           id: "req-status-new",
           desc: "New"
       },
       {
           id: "req-status-assigned",
           desc: "Assigned"
       },
       {
           id: "req-status-inprogress",
           desc: "In Progress"
       },
       {
           id: "req-type-in-pending",
           desc: "Pending"
       },
       {
           id: "req-status-complete",
           desc: "Complete"
       },
   ];

   window.hrmonline.eventstatuses = [{
           id: "event-new",
           desc: "New"
       },
       {
           id: "event-scheduled",
           desc: "Scheduled"
       },
       {
           id: "event-cancelled",
           desc: "Cancelled"
       }
   ];