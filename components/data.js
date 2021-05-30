export const combisData = {
  company: "Combis",
  logoSrc:
    "https://media-exp1.licdn.com/dms/image/C560BAQFTxLkB_qoYwg/company-logo_100_100/0/1607436816105?e=1630540800&v=beta&t=0NRGkWmXK6l5vR_l4z3wGIIRbk5T49EyRDs_c8dNFl0",
  date: "8.2019. -present",
  location: "Zagreb",
  role: "Fullstack Software Engineer",
  techStack: [
    ".NET Core",
    "C#",
    "MS Azure",
    "MS SQL",
    "Vue.js",
    "React.js",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "Hangfire",
    "Dynamics 365",
    "TFS",
    "Github",
    "Postman",
    "Ngrok",
  ],
  projects: [
    {
      date: "February 2021.",
      text: `•Fixed a business critical bug where there were 2x async workflows triggered by the same event trying to update current and related entities with race conditions by combining racing code into single WF.
      •Refactored and asynchronized company global javascripts for data fetching and manipulation to the ES6+ standard.`,
      details: "",
      stack: [],
    },
    {
      date: "November 2020.",
      text: `•Bussiness process Workflow execution through Ms Teams Bot Framework`,
      details: `•Integrated company workflow and process execution through MS Teams App with MS Bot Framework Api, MS Graph Api and custom Api that notified Teams chatbot about events inside company CRM. 
      Chatbot received passed data and sent specific empoyee adaptive UI card which enabled them to excute workflow through chat message UI
      •My job was also to setup and introduce testing environment for more junior devs to help with further development.`,
      stack: [".netcore", "msGraph", "msBotFramework", "rest", "ngrok", "postman"],
    },
    {
      date: "October 2020.",
      text: `•Company internal ticketing system`,
      details: `•Developed and deployed ticketing API and  frontend for reporting employee problems with work equipment or any other work related problems through custom dashboard made in Vue.js.
        All reported problems were also psoted to existing company CRM Platform, personalized data was dynamically pulled from API for each employee`,
      stack: [".netCore", "sql", "vue", "rest", "html", "css"],
    },
    {
      date: "August 2020.",
      text: "Developed/deployed file share API and frontend components",
      details: `•Developed internal file share API  using .net core 3.1 and MemoryStream to stream dropped files as byte[] to Sharepoint using their API.
       Also helped team in making a custom component library for this api, my job was also to connect Vue compoenents to the file share API.`,
      stack: [".netCore", "postman", "vue", "js", "css"],
    },
    {
      date: "March 2020.",
      text: `•Developed internal App, Chron jobs for managing employees Multisport cards, I had full project ownership and constant communication with the PM and testing team.`,
      details: "",
      stack: [".netCore", "hangfire", "vue"],
    },
    {
      date: "December 2019.",
      text: `•Architected, developed & deployed Chron job for pushing project reminders to employees.
      •Migrated,refactored and redeployed on Premise web components for employee work hours time tracking & logging into Cloud version(Dynamics 365).
      •Mentored/helped new junior college (mostly in C#, JS debugging and unit testing) .
      `,
      details: "",
      stack: [],
    },
    {
      date: "November 2019.",
      text: `•HT Group Hackathon (11.2019.): Made frontend and api for estate renting mobile APP.`,
      details: "",
      stack: ["react", "ts", "js", "c#"],
    },
  ],
};

export const dotmetricsData = {
  company: "Dotmetrics",
  logoSrc:
    "https://media-exp1.licdn.com/dms/image/C560BAQHgh8NxWVhSzg/company-logo_100_100/0/1579078366455?e=1630540800&v=beta&t=pLdddd7vyTszwrck2K49WN6I1-NiDtECLWMq-zQhzsg",
  date: "3.2018. -7.2019.",
  location: "Zagreb",
  role: "Junior software engineer",
  techStack: [
    ".NET",
    "C#",
    "MS SQL",
    "HTML",
    "CSS",
    "Selenium",
    "ZeroMQ",
    "React.js",
    "SVN",
    "Big data",
    "Fiddler",
    "Git",
  ],
  projects: [
    {
      text: `•Developed and unit tested API for new analytics browser extension 
    .•RnD and main platform development & maintenance.`,
      details: `For that project my job was to first create new tables/views in SQL Server, DAL,BL generation (with custom ORM based on Entity framework (DB first approach) and also the API implementation with WCF and .NET Framework 4.5.2 . I also thoroughly unit tested api payloads and user data permissions.
    December 2018. (Automated website script inspector tool)
    Site/ Site section automated parser tool that inspected sites analytics scripts. (Selenium Headless, c#)
    June - July 2018. -ZeroMQ Client-Server & Router-Dealer messaging queues
    I created a Windows forms chat application in .NET Framework 4.6.1 using ZeroMQ library.
    Where clien (REQ Zsocket) sends messages to server(REP Zsocket) over TCP. Later I updated that project to Router-Dealer Z-sockets so that multiple clients can talk asynchronously to a single server.`,
    },
  ],
};
