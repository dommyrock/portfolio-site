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
  dayTdayTasks: "",
  projects: [
    {
      date: "February 2021.",
      text: `•Fixed a business critical bug where there were 2x async workflows triggered by the same event trying to update current and related entities with race conditions by combining racing code into single WF.
      •Refactored and asynchronized company global javascripts for data fetching and manipulation to the ES6+ standard.`,
      details: "",
      stack: ["C#", "js"],
    },
    {
      date: "November 2020.",
      text: `•Bussiness process Workflow execution/automation through Chatbot`,
      src: "teams",
      details: `•Integrated company workflow and process execution through MS Teams App with MS Bot Framework Api, MS Graph Api and custom Api that notified Teams chatbot about events inside company CRM. 
      Chatbot received passed data and sent specific empoyee adaptive UI card which enabled them to excute workflow through chat message UI
      •My job was also to setup and introduce testing environment for more junior devs to help with further development.`,
      stack: ["C#", "msGraph", "msBotFramework", "azure", "rest", "ngrok", "postman"],
    },
    {
      date: "October 2020.",
      text: `•Company internal ticketing system`,
      src: "ticket",
      details: `•Developed and deployed ticketing API and  frontend for reporting employee problems with work equipment or any other work related problems through custom dashboard made in Vue.js.
        All reported problems were also psoted to existing company CRM Platform, personalized data was dynamically pulled from API for each employee`,
      stack: ["C#", "sql", "vue", "rest", "html", "css"],
    },
    {
      date: "Match-August 2020.",
      text: "Developed/deployed file share API and frontend components",
      src: "sharepoint",
      details: `•Developed internal file share API  using .net core 3.1 and MemoryStream to stream dropped files as byte[] to Sharepoint using their API.
      Handled url frontend/backend file encoding/decoding and sending file payload as base64 encoded string.
       Also helped team in making a custom component library for this api, my job was also to connect Vue compoenents to the file share API.
       •Developed filewatcher service for file backup before being  uploaded to sharepoint in case of file-share Api failiure.
       `,
      stack: ["c#", "hangfire", "postman", "vue", "js", "css"],
    },
    {
      date: "November 2019 -present.",
      text: `Other projects`,
      details: `
      •Refactored and extended existing company finanance/ROI graphs and dashboards.
      •Developed internal App, Chron jobs for managing employees Multisport cards. I had full project ownership and constant communication with the PM and testing team.
      •Developed new dashboard for empoye equipement tracking.
      •Architected, developed & deployed Chron job for pushing project reminders to employees.
     •Migrated,refactored and redeployed on Premise web components for employee work hours time tracking & logging into Cloud version(Dynamics 365).
     •Mentored/helped onboard new engineer (mostly in C#, JS debugging and unit testing).`,
      stack: ["C#", "sql", , "hangfire", "postman", "vue", "js", "css"],
    },
  ],
};

export const dotmetricsData = {
  company: "Dotmetrics",
  logoSrc:
    "https://media-exp1.licdn.com/dms/image/C560BAQHgh8NxWVhSzg/company-logo_100_100/0/1579078366455?e=1630540800&v=beta&t=pLdddd7vyTszwrck2K49WN6I1-NiDtECLWMq-zQhzsg",
  date: "3.2018. -7.2019.",
  location: "Zagreb",
  role: "Junior Software Engineer",
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
  dayTdayTasks: "",
  projects: [
    {
      text: `Web extension API`,
      details: `•Developed and unit tested API for new analytics browser extension.
    For that project my job was to first create new tables/views in SQL Server, DAL,BL generation (with custom ORM based on Entity framework (DB first approach) and also the API implementation with WCF and .NET Framework 4.5.2 . I also thoroughly unit tested api payloads and user data permissions.
    December 2018. (Automated website script inspector tool)
    Site/ Site section automated parser tool that inspected sites analytics scripts. (Selenium Headless, c#)
    June - July 2018. -ZeroMQ Client-Server & Router-Dealer messaging queues
    I created a Windows forms chat application in .NET Framework 4.6.1 using ZeroMQ library.
    Where clien (REQ Zsocket) sends messages to server(REP Zsocket) over TCP. Later I updated that project to Router-Dealer Z-sockets so that multiple clients can talk asynchronously to a single server.
    •RnD and main platform development & maintenance.`,
      stack: [".net", "C#", "sql", "react", "fidler", "js", "css"],
    },
  ],
};

export const personalProj_data = [
  {
    description:
      "App is made in React.js to help me with mass image compression and zipping into single file.\nAnd was opportunity to experiment with react-spring physics based animations.",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    text: "Image compression app",
    src: "/zipGallery_QR.png",
    link: "https://zip-gallery.vercel.app",
  },
  {
    description: "Older web App where i experimented with react and github static pages hosting\n",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    text: "Github personal site",
    src: "/gitHubPersonal_QR.png",
    link: "https://dommyrock.github.io/gh-deploy/#",
  },
  {
    description:
      "In progress - Web app currently under development to help with job search.\nFrontend is made with React.js, deployed to Vercel.\nBacked is hosted on aws, indexing is done with Elasticsearch and Web Crawling is done in C#",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    text: "Job search App",
    src: "/nextJob_QR.png",
    link: "https:/\next-job.vercel.app",
  },
  {
    description: "My github repo\n",
    css: "linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",
    text: "Other projects",
    src: "/ghRepo_QR.png",
    link: "https:/\next-job.vercel.app",
  },
];
