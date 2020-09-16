
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Gary Xue",
  title: "Hi all, I'm Gary",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building distributed systems with C++ / Kafka / Redis / PostgreSQL and some other cool technologies."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/gjxue/",
  facebook: "https://www.facebook.com/gjxue/",
  gmail: "garygjxue@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/5971038/gary-xue"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECHNOLOGY STACK",
  skills: [
    emoji("⚡ Developing highly scalable and reliable systems with a healthy balance between perfectionism and pragmatism"),
    emoji("⚡ Dealing with complex algorithms and design concerns"),
    emoji("⚡ Integrating existing systems with latest technology platforms")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Distributed Systems",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Application",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Bloomberg LP",
      companylogo: require("./assets/images/bloombergLogo.png"),
      date: "October 2018 – Present",
      desc: "Building scalable systems to consume data from hundreds of exchanges and financial institutions around the world and translate it into normalized streams.",
      descBullets: [
        "C++",
        "Python",
        "Kafka",
        "Redis",
        "PostgreSQL",
      ]
    },
    {
      role: "Software Engineering Intern",   
      company: "Lime",
      companylogo: require("./assets/images/limeLogo.png"),
      date: "Jan 2018 – April 2018",
      desc: "Implemented a data warehousing solution and ETL data pipelines to process millions of user events per day.",
      descBullets: [
        "Python",
        "Airflow",
        "Superset",
        "AWS"
      ]
    },
    {
      role: "Software Development Intern",  
      company: "D2L",
      companylogo: require("./assets/images/d2lLogo.png"),
      date: "May 2017 – Aug 2017",
      desc: "Integrated Consul with the learning management system as a key/value store to allow dynamic loading of client configurations.",
      descBullets: [
        ".NET",
        "Chef",
        "Consul",
        "Vault"
      ]
    },
    {
      role: "Software Engineering Intern",  
      company: "Veeva Systems",
      companylogo: require("./assets/images/veevaLogo.jpg"),
      date: "Jan 2016 – April 2016",
      desc: "Designed a web2PDF application that allows pharmaceutical companies to better compile with FDA requirements.",
      descBullets: [
        "Java",
        "Spring",
        "AWS",
        "HTML/CSS/Javascript"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "AWS Certified Solutions Architect - Professional",
      subtitle: "Completed Certifcation from AWS for Cloud Solutions Architect",
      image: require("./assets/images/awsLogo.png"),
      footerLink: []
    },
    {
      title: "Associate Android Developer",
      subtitle: "Completed Certifcation from Google for Android Mobile Application Development",
      image: require("./assets/images/androidLogo.png"),
      footerLink: []
    },
    {
      title: "Hack the North 2017 Finalist",
      subtitle: "Selected as Hack the North 2017 Finalist from 1200+ students from all around Canada",
      image: require("./assets/images/hackthenorthLogo.png"),
      footerLink: []
    }
  ]
};

// Blogs Section

const blogSection = {
};

// Talks Sections

const talkSection = {
};

// Podcast Section

const podcastSection = {
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+001-2012755759",
  email_address: "garygjxue@gmail.com"
};

//Twitter Section

const twitterDetails = {
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
