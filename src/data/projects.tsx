import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiFlutter,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {/* Links removed - details displayed inline */}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. ScaleMart E-commerce Platform
    id: "scalemart",
    category: "E-commerce Platform",
    title: "ScaleMart E-commerce Platform",
    src: "/assets/projects-screenshots/Scalemart/Landing-page.png",
    screenshots: [
      "/assets/projects-screenshots/Scalemart/Landing-page.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://scale-mart1.vercel.app/",
    github: "https://github.com/nitin272/E_commerce_Capstone.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Secure and Scalable MERN E-commerce Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Built a secure and scalable MERN-based e-commerce platform with real-time communication 
            and role-based administration. Created a secure, scalable e-commerce platform providing 
            filtered browsing, real-time communication, and administrative control.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Timeline</TypographyH3>
          <p className="font-mono mb-2">
            April 2024 – May 2024
          </p>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            MERN stack, Socket.io, JWT, Vercel, Render, FCM
          </p>
          
          <TypographyH3 className="my-4 mt-8">Problem Solved / Use Case</TypographyH3>
          <p className="font-mono mb-2">
            Created a secure, scalable e-commerce platform providing filtered browsing, real-time 
            communication, and administrative control for seamless shopping experiences.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Secured user sessions with JWT stored in HTTP-only cookies<br/>
            • Enforced role-based access permissions<br/>
            • Leveraged service workers for offline support<br/>
            • Implemented FCM push notifications for real-time updates<br/>
            • Advanced product filtering and search<br/>
            • Real-time inventory management
          </p>
          
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Delivered a production-ready e-commerce solution with enterprise-level security 
            and real-time capabilities, enabling seamless shopping experiences with secure 
            user sessions and role-based access control.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Challenges Tackled</TypographyH3>
          <p className="font-mono mb-2">
            • Implemented FCM push notifications for real-time updates<br/>
            • Managed complex state for cart and inventory<br/>
            • Ensured secure payment processing<br/>
            • Optimized database queries for performance
          </p>
        </div>
      );
    },
  },
  { // 02. Readly - Book Review Platform
    id: "readly",
    category: "Book Review Platform",
    title: "Readly - Book Review Platform",
    src: "/assets/projects-screenshots/Readly/1.png",
    screenshots: ["/assets/projects-screenshots/Readly/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://book-review-platform.pages.dev/",
    github: "https://github.com/nitin272/Book-review-platform.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Comprehensive MERN Stack Platform for Book Enthusiasts
          </TypographyP>
          <TypographyP className="font-mono ">
            Architected and developed a comprehensive MERN stack platform for book enthusiasts, 
            enabling secure user authentication, book discovery, and a dynamic 1-5 star review system.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Timeline</TypographyH3>
          <p className="font-mono mb-2">
            September 2025 – October 2025
          </p>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Full-stack MERN (React 19, Node.js, Express.js, MongoDB), Material UI, Redis caching, 
            JWT, Context API, Chart.js, and Winston logging
          </p>
          
          <TypographyH3 className="my-4 mt-8">Problem Solved / Use Case</TypographyH3>
          <p className="font-mono mb-2">
            Solved the need for a community-driven, feature-rich platform by providing advanced 
            search & filtering (title, author, genre) and a dynamic rating system for book discovery 
            and sharing.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Advanced search & filtering (title, author, genre)<br/>
            • Dynamic 1-5 star rating system<br/>
            • Redis caching for optimized performance<br/>
            • Pagination (5 books per page)<br/>
            • JWT tokens & HTTP-only cookies for security<br/>
            • Protected routes via middleware<br/>
            • Complex state management using Context API<br/>
            • Chart.js for analytics and statistics
          </p>
          
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Achieved high performance with faster load times and efficient browsing through 
            Redis caching and optimized database queries, resulting in 5x faster page loads.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Challenges Tackled</TypographyH3>
          <p className="font-mono mb-2">
            • Secured the application with JWT tokens & HTTP-only cookies<br/>
            • Implemented protected routes via middleware<br/>
            • Managed complex state across the application using Context API<br/>
            • Optimized database queries for performance<br/>
            • Implemented Redis caching layer
          </p>
        </div>
      );
    },
  },
  { // 03. BookBuddy - Book Management
    id: "bookbuddy",
    category: "Book Management",
    title: "BookBuddy - Book Management",
    src: "/assets/BookBuddy/1.png",
    screenshots: ["/assets/BookBuddy/1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://book-buddy-9uks.onrender.com/",
    github: "https://github.com/nitin272/Book-review-platform.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack Book Tracking and Review Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed BookBuddy, a full-stack book tracking and review platform using Ruby on Rails, 
            PostgreSQL, and Hotwire, with features like reading progress and user profiles.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Timeline</TypographyH3>
          <p className="font-mono mb-2">
            April 2025 – May 2025
          </p>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Ruby on Rails, PostgreSQL, Hotwire, Docker, Github Actions, RSpec, Capybara, Brakeman
          </p>
          
          <TypographyH3 className="my-4 mt-8">Problem Solved / Use Case</TypographyH3>
          <p className="font-mono mb-2">
            Provided a dedicated platform for users to securely track their reading progress, 
            review books, and manage user profiles with enterprise-level security.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Track reading progress<br/>
            • Review books with ratings<br/>
            • Manage user profiles<br/>
            • Custom authentication with session expiry<br/>
            • Secure password encryption<br/>
            • Brakeman vulnerability scanning<br/>
            • Real-time updates with Hotwire<br/>
            • Comprehensive test coverage with RSpec and Capybara
          </p>
          
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Dockerized application for easy deployment, implemented CI/CD with Github Actions, 
            and ensured test reliability with RSpec and Capybara for production-ready code.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Challenges Tackled</TypographyH3>
          <p className="font-mono mb-2">
            • Implemented custom authentication with session expiry<br/>
            • Secured password encryption and storage<br/>
            • Integrated Brakeman for vulnerability scanning<br/>
            • Set up CI/CD pipeline with GitHub Actions<br/>
            • Containerized with Docker for consistent deployment
          </p>
        </div>
      );
    },
  },
  { // 04. Jarvis AI Assistant
    id: "jarvis",
    category: "AI Assistant",
    title: "Jarvis AI Assistant",
    src: "/assets/projects-screenshots/Jarvis/1.png",
    screenshots: ["/assets/projects-screenshots/Jarvis/1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://github.com/nitin272/Python--AI-Assistant-JARVIS-.git",
    github: "https://github.com/nitin272/Python--AI-Assistant-JARVIS-.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart Python-based AI Assistant with Voice Activation
          </TypographyP>
          <TypographyP className="font-mono ">
            Jarvis AI is your smart Python-based assistant that listens to hotwords and executes 
            tasks accordingly! It features real-time voice activation, parallel processing, and an 
            interactive web UI.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            🎙️ Voice Activation – Detects hotwords like Jarvis or Alexa and responds!<br/>
            ⚡ Parallel Processing – Runs multiple processes for smooth performance<br/>
            🌍 Web UI Integration – Interactive UI powered by Eel<br/>
            🛠️ Custom Commands – Easily extendable with new features
          </p>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, Eel (Web UI), Porcupine (Hotword Detection), PyAudio, PyAutoGUI
          </p>
          
          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-2">
            • Launches two parallel processes for UI and hotword detection<br/>
            • Uses Porcupine engine to detect hotwords like "Jarvis" or "Alexa"<br/>
            • Triggers commands based on detected hotwords<br/>
            • Interactive web-based UI for easy interaction
          </p>
        </div>
      );
    },
  },
  { // 05. FoodieHub
    id: "foodiehub",
    category: "Mobile App",
    title: "FoodieHub - Food Delivery App",
    src: "/assets/FoodieHub/image.png",
    screenshots: ["/assets/FoodieHub/image.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
      ],
      backend: [],
    },
    live: "https://drive.google.com/file/d/1sAKXdYkb6BCgRdK9cNGuprO8PZHdI7wv/view",
    github: "https://github.com/nitin272/Foodie-Hub.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Modern Food Delivery App Built with Flutter
          </TypographyP>
          <TypographyP className="font-mono ">
            A modern food delivery app built with Flutter, featuring restaurant 
            browsing, menu viewing, cart management, and order tracking with intuitive UI/UX.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Flutter, Dart
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            🏠 Browse restaurants by category<br/>
            🍕 View restaurant menus with detailed items<br/>
            🛒 Add items to cart with quantity management<br/>
            📦 Track your orders in real-time<br/>
            👤 User profile management<br/>
            💳 Order checkout with bill details<br/>
            ⭐ Restaurant ratings and reviews
          </p>
          
          <TypographyH3 className="my-4 mt-8">Color Scheme</TypographyH3>
          <p className="font-mono mb-2">
            Primary: #FF6B6B (Coral Red)<br/>
            Background: #f8f8f8 (Light Gray)<br/>
            Text: #333 (Dark Gray)
          </p>
          
          <TypographyH3 className="my-4 mt-8">Future Enhancements</TypographyH3>
          <p className="font-mono mb-2">
            • Backend API integration<br/>
            • User authentication with Firebase<br/>
            • Real-time order tracking with maps<br/>
            • Payment gateway integration (Stripe/Razorpay)<br/>
            • Push notifications for order updates<br/>
            • Advanced restaurant search and filters<br/>
            • User reviews and ratings system<br/>
            • Favorites and saved addresses
          </p>
          
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Developed a functional Flutter prototype for food delivery services with smooth navigation 
            and intuitive user experience, ready for backend integration and production deployment.
          </p>
        </div>
      );
    },
  },
  { // 06. LawConnect - Legal Consultation Platform
    id: "lawconnect",
    category: "Legal Tech Platform",
    title: "LawConnect - MERN Legal Consultation Platform",
    src: "/assets/projects-screenshots/LawConnect/image.png",
    screenshots: ["/assets/projects-screenshots/LawConnect/image.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.openai,
      ],
    },
    live: "https://lawyer-consultancy.vercel.app",
    github: "https://github.com/nitin272/Lawyer_Consultancy.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            MERN Stack Legal Consultation Platform with AI Integration
          </TypographyP>
          <TypographyP className="font-mono ">
            LawConnect is a comprehensive MERN stack web application that bridges the gap between 
            clients and lawyers. It enables seamless appointment booking, legal resource access, 
            and AI-powered legal guidance.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Frontend: React.js, Tailwind CSS<br/>
            Backend: Node.js, Express.js<br/>
            Database: MongoDB with Mongoose<br/>
            APIs: Google Calendar API, OpenAI API (optional)<br/>
            Authentication: JWT (optional for future)
          </p>
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            📅 Google Meet Integration – Clients book appointments with lawyers via Google Calendar API<br/>
            👨‍⚖️ Dual User Roles – Separate interfaces for clients and lawyers<br/>
            📚 Legal Resources – Comprehensive legal guides and documentation<br/>
            💬 Contact Form – Direct communication channel for inquiries<br/>
            🤖 AI Legal Book – Optional OpenAI integration for legal Q&A<br/>
            📊 Appointment Management – Lawyers view and manage scheduled meetings
          </p>
          
          <TypographyH3 className="my-4 mt-8">API Endpoints</TypographyH3>
          <p className="font-mono mb-2">
            POST /api/contact – Submit contact form<br/>
            POST /api/meet/schedule – Client schedules a meet<br/>
            GET /api/meet/all – Lawyer fetches upcoming meets<br/>
            POST /api/legalbook/query – AI legal question answering
          </p>
          
          <TypographyH3 className="my-4 mt-8">Pages</TypographyH3>
          <p className="font-mono mb-2">
            / – Landing page for clients & lawyers<br/>
            /contact – Contact form<br/>
            /legal-book – Static legal guide with optional AI search<br/>
            /schedule-meet – Client appointment booking<br/>
            /consultation – Lawyer's meeting dashboard
          </p>
          
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Developed a functional prototype for legal consultation services, enabling efficient 
            appointment scheduling and providing accessible legal resources to clients with 
            AI-powered assistance.
          </p>
          
          <TypographyH3 className="my-4 mt-8">Problem Solved</TypographyH3>
          <p className="font-mono mb-2">
            Bridged the gap between clients seeking legal advice and lawyers offering services 
            by providing a centralized platform for appointment booking, resource sharing, and 
            AI-assisted legal guidance.
          </p>
        </div>
      );
    },
  },
];
export default projects;
