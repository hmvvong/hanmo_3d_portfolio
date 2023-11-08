import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Develop",
      icon: web,
    },
    {
      title: "Backend Develop",
      icon: backend,
    },
    {
      title: "UI/UX Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Northeastern University",
      company_name: "Master of Science in Information Systems",
      // icon: usa,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Application Modeling and Design", 
        "Web Design and User Experience Engineering", "Program Structure and Algorithms", 
        "Web Development Tools and Methods", 
        "Smartphones-Based Web Development",
      ],
    },
    {
      title: "University College London",
      company_name: "Bachelor of Science (First Class Honours)",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2016 - Apr 2020",
      points: [
        "Physical Chemistry",
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Calculus",
        "Probability and Statistics",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Worked as a high school chemistry teacher, teaching A-LEVEL, AP, and IB courses in bilingual languages",
      // name: "Sara Lee",
      // designation: "CFO",
      // company: "Acme Co",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Advanced React Admin Dashboard Development",
      description:
        "Developed a modern React Admin Dashboard Application with a dashboard, 3 pages, 4 Apps, and 7 fully functional charts",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "HTML5/CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/hmvvong?tab=repositories",
    },
    {
      name: "3D Web Developer Portfolio",
      description:
        "Crafted an immersive online portfolio showcasing skills and projects through interactive 3D elements for potential employers and clients",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/hmvvong?tab=repositories",
    },
    {
      name: "Advanced Credit Card Fraud Detection System",
      description:
        "Developed and fine-tuned machine learning models, including Logistic Regression and Random Forest, achieving an accuracy of over 95%",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Data Preprocessing ",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/hmvvong?tab=repositories",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };