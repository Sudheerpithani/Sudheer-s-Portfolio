// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import sqlLogo from './assets/tech_logo/sql.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import restapiLogo from './assets/tech_logo/restapi.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import smartbridgeLogo from './assets/company_logo/smartbridge_logo.jpg';
import skilldzireLogo from './assets/company_logo/skilldzire.jpg';

// Education Section Logo's
import adityaLogo from './assets/education_logo/Adityacollege.jpg';
import bvcLogo from './assets/education_logo/bvccollege.jpg';
import godiLogo from './assets/education_logo/godischool.jpg';

// Project Section Logo's
import todoLogo from './assets/work_logo/todo.png';
import My_portfolio from './assets/work_logo/My_portfolio.png';

// Certificates Section Logo's
import reactCert from './assets/certificates/React_Certificate.png';
import jsCert from './assets/certificates/javascript_intermediate_certificate.jpg';
import frontendCert from './assets/certificates/Introduction_to_Front_End_Development.jpg';
import htmlCert from './assets/certificates/HTML.jpg';
import cssCert from './assets/certificates/css_certificate.jpg';
import aiMlCert from './assets/Certificates/AI&ML_Intren.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'REST API', logo: restapiLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: smartbridgeLogo,
      role: "MERN Stack Intern",
      company: "Smartbridge",
      date: "May 2025 - June 2025",
      desc: "As a MERN Stack Intern at SmartBridge, I worked on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). My responsibilities included building responsive front-end interfaces using React, designing RESTful APIs with Express and Node.js, and managing data with MongoDB. I collaborated on a real-time Complaint Registration and Management System project, which helped me gain hands-on experience in component-based architecture, routing, state management, and CRUD operations.",
      skills: [
        "React JS",
        "Node JS",
        "Express.js",
        "MongoDb",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: skilldzireLogo,
      role: "AI & ML Intern",
      company: "SkillDzire",
      date: "May 2024 - June 2024",
      desc: "During my internship at SkillDzire, I gained practical experience in Artificial Intelligence and Machine Learning by working on a real-time Sentiment Analysis project. The project focused on analyzing text data (e.g., tweets or reviews) to classify sentiments as positive, negative, or neutral. I applied key ML concepts such as data preprocessing, feature extraction, model training, and evaluation using Python and libraries like Scikit-learn, NLTK, and Pandas.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
      ],
    },
  ];
  
  export const education = [
    {
        id: 0,
        img: adityaLogo,
        school: "Aditya College of Engineering and Technology",
        date: "July 2021 - Present",
        grade: "7.4 CGPA",
        desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering at Aditya College of Engineering and Technology. The program has provided me with a strong foundation in programming, data structures, algorithms, database systems, web technologies, and software development. I have actively participated in technical workshops, and project-based learning activities, which have enhanced my practical skills and problem-solving abilities.",
        degree: "B.Tech in Computer Science and Engineering",
    },
    {
      id: 1,
      img: bvcLogo,
      school: "BVC Institute of Technology and Science, Amalapuram",
      date: "July 2020 - June 2023",
      grade: "76.77%",
      desc: "I completed my Diploma in Computer Engineering from BVC Institute of Technology and Science, Amalapuram.",
      degree: "Diploma in Computer Engineering",
    },
    {
      id: 2,
      img: godiLogo,
      school: "A.P.S.W.R. School (B), Allavaram",
      date: "July 2017 - April 2020",
      grade: "79.67%",
      desc: "I completed my secondary education (Class 10) at A.P.S.W.R. School (B), Allavaram.",
      degree: "SSC (Class 10), Board of Secondary Education, AP",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ToDo App",
      description:
        "Built a dynamic and responsive ToDo application using React.js that allows users to efficiently manage daily tasks. Core functionalities include adding new tasks, marking tasks as completed, editing task content, and deleting tasks.",
      image: todoLogo,
      tags: [ "React JS","CSS"],
      github: "https://github.com/Sudheerpithani/Todo-App",
      webapp: "https://sudheerpithani.github.io/Todo-App/",
    },
    {
      id: 1,
      title: "My Portfolio",
      description:
        "The Personal Portfolio Website is a modern, responsive web application developed using React.js and styled with Tailwind CSS. It serves as an interactive platform to showcase my professional profile, including skills, projects, education, and certifications.",
      image: My_portfolio,
      tags: ["React JS", "Tailwind CSS"],
      github: "https://github.com/Sudheerpithani/Sudheer-s-Portfolio",
      webapp: "https://sudheerpithani.github.io/Sudheer-s-Portfolio",
    },
  ];  

export const certificates = [
  {
    id: 1,
    title: "React JS",
    issuer: "Scaler Academy",
    image: reactCert,
    link: "https://drive.google.com/file/d/1MFY7Y6d9wpUN4Vmwfo8JYnKLWH0Pz4YA/view?usp=sharing",
  },
  {
    id: 2,
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    image: jsCert,
    link: "https://www.hackerrank.com/certificates/ab941a763fda",
  },
  {
    id: 3,
    title: "Frontend Development",
    issuer: "Simplilearn",
    image: frontendCert,
    link: "https://simpli-web.app.link/e/U9Sa75OT9Tb",
  },
  {
    id: 4,
    title: "HTML",
    issuer: "Great Learning",
    image: htmlCert,
    link: "https://drive.google.com/file/d/1w7k49_5TzcGwdrnVWAkTJwo0NGQbNvzY/view?usp=sharing",
  },
  {
    id: 5,
    title: "CSS",
    issuer: "HackerRank",
    image: cssCert,
    link: "https://www.hackerrank.com/certificates/25a3913e5ff7",
  },
  {
    id: 6,
    title: "AI & ML Internship",
    issuer: "SkillDzire",
    image: aiMlCert,
    link: "",
  }
];
