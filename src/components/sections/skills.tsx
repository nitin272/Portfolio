import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data/constants";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // All skills in one array
  const allSkills = [
    SKILLS.js,
    SKILLS.ts,
    SKILLS.react,
    SKILLS.reactnative,
    SKILLS.angular,
    SKILLS.flutter,
    SKILLS.nextjs,
    SKILLS.nodejs,
    SKILLS.express,
    SKILLS.ruby,
    SKILLS.rust,
    SKILLS.html,
    SKILLS.css,
    SKILLS.tailwind,
    SKILLS.mongodb,
    SKILLS.postgres,
    SKILLS.docker,
    SKILLS.git,
    SKILLS.github,
    SKILLS.linux,
    SKILLS.npm,
    SKILLS.firebase,
    SKILLS.vercel,
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate skill cards with stagger
    skillCardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          scale: 0.3,
          y: 50,
          rotation: -10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
          delay: (index % 12) * 0.03,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="skills" className="relative w-full min-h-screen py-20 md:py-32 px-4 md:px-8 z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <Link href={"#skills"}>
            <BoxReveal width="100%">
              <h2
                className={cn(
                  "bg-clip-text text-6xl text-center text-transparent md:text-9xl mb-6 font-black tracking-tight",
                  "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
                  "dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                )}
              >
                SKILLS
              </h2>
            </BoxReveal>
          </Link>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-purple-500 to-purple-500"></div>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-2xl font-bold">
              Backend-focused Full Stack Engineer
            </p>
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent via-purple-500 to-purple-500"></div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg max-w-3xl mx-auto">
            Scalable APIs • Microservices • DevOps • Cloud Infrastructure
          </p>
        </div>

        {/* Skills Grid - Better Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {allSkills.map((skill, index) => (
              <div
                key={skill.id}
                ref={el => {
                  if (el) skillCardsRef.current[index] = el;
                }}
                className="group relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-2xl hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:-translate-y-2 sm:hover:-translate-y-4 cursor-pointer shadow-lg hover:shadow-2xl aspect-square"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}30, transparent 70%)`,
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative w-full h-full flex items-center justify-center mb-1 sm:mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src={skill.icon}
                      alt={skill.label}
                      width={80}
                      height={80}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Icon glow */}
                  <div 
                    className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10"
                    style={{ background: skill.color }}
                  />
                </div>
                
                {/* Label */}
                <h4 className="text-[10px] sm:text-xs md:text-sm font-black text-center text-neutral-800 dark:text-white transition-colors relative z-10 leading-tight mt-auto">
                  {skill.label}
                </h4>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent skew-x-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
