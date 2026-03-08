const config = {
  title: "Nitin Soni | Backend Engineer",
  description: {
    long: "Explore the portfolio of Nitin Soni, a Backend-focused engineer with strong experience in scalable APIs, microservices, and DevOps workflows. Built production-style backend systems using Node.js, Redis caching, Docker, and CI/CD pipelines. Interested in platform engineering and infrastructure automation, with a focus on building reliable systems, optimizing performance, and improving developer workflows.",
    short:
      "Discover the portfolio of Nitin Soni, a Backend Engineer specializing in scalable APIs, microservices, and DevOps.",
  },
  keywords: [
    "Nitin",
    "Nitin Soni",
    "nitinsoni",
    "Nitin Soni portfolio",
    "portfolio",
    "Backend Engineer",
    "Node.js",
    "Express.js",
    "MERN Stack",
    "Ruby on Rails",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Microservices",
    "RESTful API",
    "ScaleMart",
    "Readly",
    "BookBuddy",
    "web development",
    "DevOps",
    "Platform Engineering",
  ],
  author: "Nitin Soni",
  email: "nitinsoni95092@gmail.com",
  site: "https://yoursite.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/nitin-soni-79437428a/",
    instagram: "",
    facebook: "",
    github: "https://github.com/nitin272/",
  },
};
export { config };
