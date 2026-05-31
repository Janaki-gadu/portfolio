import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function PortfolioV2() {
  const [position, setPosition] = useState({
  x: 0,
  y: 0,
});
useEffect(() => {

  const move = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", move);

  return () => {
    window.removeEventListener("mousemove", move);
  };

}, []);
  const projects = [
    {
      title: "LearnMate – Smart Education Management Platform",
      image: "/learnmate.png",
      category: "UI/UX + EdTech",
      description:
        "Designed a comprehensive EdTech ecosystem in Figma to help educators manage attendance, fees, communication, and scheduling through a scalable user-centered platform.",
      tools: ["Figma", "UI/UX", "EdTech", "Product Design"],
      link: "https://www.figma.com/proto/YT5AfEQvslLhpSk2rkhUcO/LearnMate?node-id=0-1&t=NTmos8Fv0Eleed5k-1",
    },
    {
      title: "WhatsPlan – Smart Planning & Productivity App",
      image: "/whatsplan.png",
      category: "Productivity + UX",
      description:
        "Built a productivity-focused planning prototype that improves task organization, workflow clarity, and user efficiency with intuitive interaction design.",
      tools: ["Figma", "UX Strategy", "Workflow Design"],
      link: "https://www.figma.com/proto/Qx8LxgVSnwp0kTwCnN8uLF/WhatsPlan-Prototype?t=NTmos8Fv0Eleed5k-1",
    },
    {
      title: "Hotstar OTT UI/UX Redesign",
      image: "/hotstar.png",
      category: "OTT + UI/UX",
      description:
        "Independently redesigned the OTT streaming experience with enhanced navigation, accessibility, and personalized content discovery.",
      tools: ["Figma", "OTT", "Wireframing", "User Flow"],
      link: "https://www.figma.com/proto/u5bv34tLlxQKvdhbtM5MYC/Hotstar?t=NTmos8Fv0Eleed5k-1",
    },
    {
      title: "ReqGenie",
      image: "/reqgenie.png",
      category: "Software + AI",
      description:
        "Developed a requirement generation solution focused on structured workflows, smarter planning, and practical system clarity.",
      tools: ["JavaScript", "Problem Solving", "Workflow"],
      link: "https://github.com/Janaki-gadu/ReqGenie",
    },
    {
      title: "AI Chatbot",
      image: "/chatbot.png",
      category: "Python + AI",
      description:
        "Built a conversational AI chatbot demonstrating automation, logic building, and practical implementation of intelligent systems.",
      tools: ["Python", "Chatbot", "Automation"],
      link: "https://github.com/Janaki-gadu/chatbot",
    },
    {
      title: "Shlokavedhika",
      image: "/shlokavedika.png",
      category: "RAG + Research",
      description:
        "Created an intelligent retrieval-focused project that reflects structured knowledge access, contextual understanding, and innovation.",
      tools: ["Python", "RAG", "Research"],
      link: "https://github.com/Janaki-gadu/Shlokavedhika",
    },
  ];

  const skills = [
    "Figma",
    "Canva",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "Python",
    "JavaScript",
    "SQL",
    "Prompt Engineering",
    "RAG",
    "GitHub",
    "Problem Solving",
  ];

  const achievements = [
    "Smart India Hackathon Finalist",
    "NYD Hackathon Participant",
    "Sankalp 2025 Selected Team",
    "Aadhritha Hack24 Coordinator",
    "Freedom Fest Volunteer",
  ];

  const certifications = [
    "UI/UX Design – Tech Mahindra",
    "Python Essentials – Cisco",
    "AICTE Smart India Hackathon",
    "Quantum Fundamentals",
  ];

  const skillCategories = [
    {
      title: "UI/UX & Product Design",
      icon: "🎨",
      skills: ["Figma", "Canva", "Wireframing", "Prototyping", "User Flow", "Accessibility"],
    },
    {
      title: "Development",
      icon: "💻",
      skills: ["Python", "C", "C++", "JavaScript", "HTML/CSS", "SQL"],
    },
    {
      title: "AI & Innovation",
      icon: "🤖",
      skills: ["RAG", "Prompt Engineering", "Automation", "Research", "Problem Solving"],
    },
    {
      title: "Professional Strengths",
      icon: "🚀",
      skills: ["Leadership", "Communication", "Critical Thinking", "Teamwork"],
    },
  ];

  const stats = [
    { number: "8+", label: "Projects Built" },
    { number: "4+", label: "Hackathons & Innovation Events" },
    { number: "3+", label: "Internships & Practical Experiences" },
    { number: "100%", label: "Independent Creativity & Execution" },
  ];
  const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institute: "MVGR College of Engineering, Vizianagaram",
    duration: "2024 – Present",
    cgpa: "9.07 CGPA",
    learnings: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Artificial Intelligence",
      "Problem Solving & System Design",
    ],
  },

  {
    degree: "Diploma in Computer Science Engineering",
    institute: "Government Polytechnic for Women, Bheemunipatnam",
    duration: "2020 – 2023",
    cgpa: "9.10 CGPA",
    learnings: [
      "Programming Fundamentals",
      "Computer Networks",
      "Operating Systems",
      "Database Concepts",
      "Web Technologies",
      "Technical Communication",
    ],
  },
];

  return (
    <div
  className="
  min-h-screen
  text-white
  scroll-smooth
  relative
  overflow-x-hidden
  bg-[#030712]
  "
>
  {/* PREMIUM GLOBAL BACKGROUND */}

<div className="absolute inset-0 -z-10 overflow-hidden">
  <div
  className="
  fixed
  w-[400px]
  h-[400px]
  rounded-full
  pointer-events-none
  blur-[120px]
  opacity-20
  bg-cyan-500
  z-0
  "
  style={{
    left: position.x - 200,
    top: position.y - 200,
  }}
/>

  {/* Main Mesh Gradient */}

  <div className="absolute inset-0 bg-[#030712]" />

  <div
    className="
    absolute
    top-[-200px]
    left-[-100px]
    w-[700px]
    h-[700px]
    bg-cyan-500/20
    rounded-full
    blur-[160px]
    animate-pulse
    "
  />

  <div
    className="
    absolute
    top-[30%]
    right-[-150px]
    w-[650px]
    h-[650px]
    bg-purple-600/20
    rounded-full
    blur-[180px]
    animate-pulse
    "
  />

  <div
    className="
    absolute
    bottom-[-200px]
    left-[20%]
    w-[800px]
    h-[800px]
    bg-pink-500/10
    rounded-full
    blur-[200px]
    "
  />

  {/* Grid Overlay */}

  <div
    className="
    absolute
    inset-0
    opacity-[0.05]
    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
    bg-[size:70px_70px]
    "
  />

  {/* Vertical Glow Lines */}

  <div className="absolute inset-0 flex justify-around opacity-20">

    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="
        w-[1px]
        h-full
        bg-gradient-to-b
        from-transparent
        via-cyan-400
        to-transparent
        "
      />
    ))}

  </div>

  {/* Noise Texture */}

  <div
    className="
    absolute
    inset-0
    opacity-[0.03]
    mix-blend-soft-light
    bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
    "
  />

</div>
          {/* Animated Tech Background */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="
absolute
top-20
left-20
w-72
h-72
bg-cyan-500/20
rounded-full
blur-[140px]
animate-pulse
"/>

<div className="
absolute
bottom-20
right-20
w-80
h-80
bg-purple-500/20
rounded-full
blur-[150px]
animate-pulse
delay-700
"/>

<div className="
absolute
top-1/2
left-1/2
w-[500px]
h-[500px]
border
border-cyan-500/10
rounded-full
animate-spin
duration-[15000]
"/>

<div className="
absolute
top-1/3
left-1/3
w-[300px]
h-[300px]
border
border-purple-500/10
rounded-full
animate-spin
duration-[10000]
"/>

</div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">Janaki Gadu</h1>
          <div className="hidden md:flex gap-8 text-sm text-slate-300">
                <a href="#about" className="hover:text-cyan-400 transition"> About </a>
                <a href="#education" className="hover:text-cyan-400 transition"> Education     </a>
                <a href="#skills" className="hover:text-cyan-400 transition">  Skills      </a>
                <a href="#projects" className="hover:text-cyan-400 transition">  Projects </a>
                <a href="#experience" className="hover:text-cyan-400 transition"> Experience  </a>
                <a href="#contact" className="hover:text-cyan-400 transition">Contact </a>
            </div>
        </div>
      </nav>

      <section className="
        relative
        max-w-7xl
        mx-auto
        px-6
        pt-20
        pb-24
        grid
        lg:grid-cols-2
        gap-12
        items-center
        overflow-hidden
        ">

        {/* Background Grid */}

        <div className="
            absolute
            inset-0
            opacity-[0.06]
            bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)]
            bg-[size:60px_60px]
            "/>

        {/* Glow Effects */}

        <div className="
            absolute
            top-20
            left-0
            w-96
            h-96
            bg-cyan-500/20
            blur-[140px]
            rounded-full
            "/>

        <div className="
          absolute
          right-0
          bottom-0
          w-[420px]
          h-[420px]
          bg-purple-500/20
          blur-[170px]
          rounded-full
          "/>

        {/* LEFT */}

        <div className="relative z-10">

          <div className="
              inline-flex
              items-center
              gap-2
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-5
              py-2
              rounded-full
              mb-6
              ">

            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

            <p className="text-cyan-300 text-sm">

              UI/UX DESIGNER • MERN INTERN • AI INNOVATOR

            </p>

          </div>
          

          <h1 className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              mb-6
              ">

              Designing

            <span className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
                ">

                  Intelligent Products.

            </span>

            <br />

            Building Real-World

            <span className="
                      bg-gradient-to-r
                      from-purple-400
                      to-pink-500
                      bg-clip-text
                      text-transparent
                      ">

                Solutions.

            </span>

          </h1>

          <p className="
              text-slate-300
              text-lg
              leading-relaxed
              max-w-xl
              mb-8
              ">

            I blend creativity, product thinking and technical execution to craft meaningful digital experiences across UI/UX, software engineering and AI innovation.

          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="
                  px-7
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  font-semibold
                  hover:scale-105
                  transition
                  "
            >

              Explore Projects

            </a>

            <a
              href="#contact"
              className="
                px-7
                py-3
                rounded-2xl
                border
                border-cyan-500/30
                hover:bg-cyan-500/10
                transition
                "
            >

              Let's Connect

            </a>
            <a
                  href="/JANAKI_GADU_RESUME.pdf"
                  download
                  className="
                  px-7
                  py-3
                  rounded-2xl
                  border
                  border-purple-500/30
                  hover:bg-purple-500/10
                  transition
                  "
                >
                  Download Resume
                </a>

          </div>

          <div className="
              flex
              gap-5
              mt-10
              text-sm
              text-slate-400
              flex-wrap
              ">

            <span>🎨 UI/UX</span>

            <span>⚡ MERN Stack</span>

            <span>🤖 AI Systems</span>

            <span>🛡 Cybersecurity</span>

          </div>

        </div>


    {/* RIGHT */}
       
        <div
          className="
          relative
          z-10
          flex
          justify-center
          items-start
          pt-32
          lg:pt-40
          pl-16
          "
          >

          <div
        className="
        flex
        flex-col
        gap-12
        w-full
        max-w-lg
        "
        >
    {/* TOP LEFT */}

    <div className="flex justify-start">

      <div
        className="
        w-[390px]
        bg-slate-900/70
        border
        border-cyan-500/30
        backdrop-blur-xl
        rounded-3xl
        p-6
        hover:-translate-y-2
        hover:shadow-cyan-500/20
        hover:shadow-xl
        transition-all
        duration-300
        "
      >

        <h3 className="font-bold text-cyan-400 text-xl">

          🎨 UI/UX Design

        </h3>

        <p className="text-slate-300 mt-3">

          Wireframing • User Flow • Prototyping

        </p>

      </div>

    </div>

    {/* TOP RIGHT */}

    <div className="flex justify-start">
      <div
        className="
        w-[390px]
        bg-slate-900/70
        border
        border-purple-500/30
        backdrop-blur-xl
        rounded-3xl
        p-6
        hover:-translate-y-2
        hover:shadow-purple-500/20
        hover:shadow-xl
        transition-all
        duration-300
        "
      >

        <h3 className="font-bold text-purple-400 text-xl">

          💻 Full Stack

        </h3>

        <p className="text-slate-300 mt-3">

          React • Node • MongoDB • Express

        </p>

      </div>

    </div>

    {/* BOTTOM LEFT */}

    <div className="flex justify-start">

      <div
        className="
        w-[390px]
        bg-slate-900/70
        border
        border-pink-500/30
        backdrop-blur-xl
        rounded-3xl
        p-6
        hover:-translate-y-2
        hover:shadow-pink-500/20
        hover:shadow-xl
        transition-all
        duration-300
        "
      >

        <h3 className="font-bold text-pink-400 text-xl">

          🤖 AI Innovation

              </h3>

              <p className="text-slate-300 mt-3">

                RAG • Prompt Engineering • AI Systems

              </p>

            </div>

          </div>

        </div>

      </div>
      </section>

   
    
<section
  id="about"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div
    className="
    relative
    overflow-hidden
    rounded-[40px]
    border
    border-cyan-500/20
    shadow-[0_0_60px_rgba(6,182,212,0.08)]
    bg-gradient-to-br
    from-cyan-500/10
    via-slate-950
    to-purple-500/10
    backdrop-blur-xl
    p-10
    lg:p-14
    "
  >

    {/* Glow Effect */}

    <div
      className="
      absolute
      top-0
      right-0
      w-[400px]
      h-[400px]
      bg-cyan-500/10
      blur-[120px]
      rounded-full
      "
    />

    <div
      className="
      grid
      lg:grid-cols-[350px_1fr]
      gap-12
      items-center
      "
    >

      {/* LEFT IMAGE */}

      <div className="relative">

        <div
          className="
          absolute
          -inset-2
          rounded-[36px]
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          blur-xl
          opacity-20
          "
        />

        <img
            src="/Portfolio profile pic.png"
            alt="Janaki"
            className="
            relative
            w-full
            h-[400px]
            object-cover
            object-top
            rounded-[32px]
            border
            border-white/10
            "
          />

      </div>

      {/* RIGHT CONTENT */}

      <div>

        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4 font-semibold">
          ABOUT ME
        </p>

        <h2 className="text-5xl font-extrabold mb-4 leading-tight">
          Designing Products.
          <br />

          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Solving Real Problems.
          </span>
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm Janaki, a Computer Science student passionate about crafting
                meaningful digital experiences through UI/UX Design, Full Stack
                Development, and AI-driven innovation.

                <br /><br />

                My journey combines creativity, problem-solving, and technical
                execution—transforming ideas into intuitive interfaces, scalable
                applications, and intelligent solutions. Through internships,
                hackathons, and independent projects, I continuously explore new
                technologies, refine my skills, and build products that create
                real-world impact.
              </p>
      </div>

    </div>

  </div>
</section>



<section
  id="education"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="text-center mb-16">

    <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold mb-3">
      Academic Journey
    </p>

    <h2 className="text-5xl font-extrabold mb-4">
      Learning.
      <span
        className="
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        bg-clip-text
        text-transparent
        "
      >
        {" "}Growing. Building.
      </span>
    </h2>

    <p className="text-slate-400 max-w-3xl mx-auto text-lg">
      My academic journey has been more than grades—it's been a foundation
      for creativity, technical problem-solving, product thinking, and
      continuous exploration of emerging technologies.
    </p>

  </div>

  <div className="space-y-8">

    {education.map((edu, index) => (

      <div
        key={edu.degree}
        className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        "
      >

        <div
          className="
          absolute
          top-0
          right-0
          w-64
          h-64
          bg-cyan-500/10
          blur-[100px]
          rounded-full
          "
        />

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-3">

              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-500
                flex
                items-center
                justify-center
                text-xl
                "
              >
                {index === 0 ? "🎓" : "💻"}
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {edu.degree}
                </h3>

                <p className="text-slate-400">
                  {edu.institute}
                </p>
              </div>

            </div>

            <p className="text-slate-300 leading-relaxed mt-4">
              {index === 0
                ? "Currently strengthening my foundation in software development, AI, databases, web technologies, and scalable systems while applying classroom knowledge through projects, hackathons, internships, and product design initiatives."
                : "Built a strong technical foundation through programming, networking, databases, and system fundamentals, which sparked my interest in software engineering and digital product creation."
              }
            </p>

          </div>

          <div className="flex flex-col gap-3">

            <div
              className="
              px-5
              py-3
              rounded-2xl
              bg-cyan-500/10
              border
              border-cyan-500/20
              "
            >
              <p className="text-cyan-400 font-semibold">
                {edu.cgpa}
              </p>
            </div>

            <div
              className="
              px-5
              py-3
              rounded-2xl
              bg-white/5
              border
              border-white/10
              "
            >
              <p className="text-slate-300 text-sm">
                {edu.duration}
              </p>
            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-3 mt-8">

          {edu.learnings.map((item) => (
            <span
              key={item}
              className="
              px-4
              py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              text-slate-300
              text-sm
              "
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    ))}

  </div>
</section>



      <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-4">Skills & Expertise</h3>
        <p className="text-slate-300 mb-10 max-w-3xl">A blend of design, development, AI innovation, and leadership that helps me transform ideas into impactful digital products.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 border border-white/15 hover:border-cyan-400/40 hover:-translate-y-2 transition shadow-xl">
              <h4 className="text-2xl font-bold mb-4">{category.icon} {category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-2 rounded-2xl bg-white/10 text-sm hover:bg-cyan-500/20 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-8">Portfolio Highlights</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/15 text-center shadow-xl">
              <h4 className="text-4xl font-extrabold text-cyan-400 mb-3">{stat.number}</h4>
              <p className="text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

<h3 className="text-4xl font-bold mb-12">
  How I Turn Ideas Into Products
</h3>

<div className="relative">

<div className="absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"/>

<div className="grid md:grid-cols-5 gap-6">

{[
{
title:"Discover",
icon:"🔍",
desc:"Understand users, problems and opportunities."
},
{
title:"Define",
icon:"🎯",
desc:"Translate insights into product direction."
},
{
title:"Design",
icon:"🎨",
desc:"Create intuitive and scalable experiences."
},
{
title:"Develop",
icon:"⚡",
desc:"Build robust and functional solutions."
},
{
title:"Refine",
icon:"🚀",
desc:"Iterate, optimize and improve outcomes."
},
].map((step)=>(
<div
key={step.title}
className="
relative
bg-white/[0.04]
backdrop-blur-xl
rounded-3xl
p-6
border
border-white/15
hover:border-cyan-400/40
transition
"
>

<div className="
w-12
h-12
rounded-full
bg-gradient-to-r
from-cyan-500
to-purple-500
flex
items-center
justify-center
text-xl
mb-4
">
{step.icon}
</div>

<h4 className="text-xl font-bold mb-2">
{step.title}
</h4>

<p className="text-slate-400 text-sm">
{step.desc}
</p>

</div>
))}

</div>
</div>

</section>

      <section className="max-w-7xl mx-auto px-6 py-20">

  <div
    className="
    relative
    overflow-hidden
    rounded-[36px]
    border
    border-white/10
    bg-gradient-to-br
    from-cyan-500/10
    via-slate-950
    to-purple-500/10
    backdrop-blur-xl
    p-10
    "
  >

    <div
      className="
      absolute
      top-0
      right-0
      w-80
      h-80
      bg-cyan-500/10
      blur-[120px]
      rounded-full
      "
    />

    <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
      Continuous Learning
    </p>

    <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      Exploring Emerging Technologies.
      <br />

      <span
        className="
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        bg-clip-text
        text-transparent
        "
      >
        Building Future-Ready Skills.
      </span>
    </h3>

    <p className="text-slate-300 text-lg max-w-4xl leading-relaxed mb-8">
      Beyond my current projects, I actively explore modern technologies,
      development frameworks, AI-driven systems, cybersecurity concepts,
      and product innovation practices. I enjoy learning through
      experimentation, hackathons, internships, research, and hands-on
      implementation—continuously expanding my capabilities to design and
      build impactful digital solutions.
    </p>

    <div className="flex flex-wrap gap-3">

      {[
        "Cybersecurity",
        "Artificial Intelligence",
        "MERN Stack",
        "Product Design",
        "System Design",
        "Automation",
        "Innovation"
      ].map((item) => (
        <span
          key={item}
          className="
          px-4
          py-2
          rounded-full
          bg-white/5
          border
          border-white/10
          text-slate-300
          hover:border-cyan-400/40
          hover:text-cyan-300
          transition
          "
        >
          {item}
        </span>
      ))}

    </div>

  </div>

</section>


      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-10">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div key={project.title} className="
                group
                relative
                bg-white/[0.04]
                backdrop-blur-xl
                rounded-3xl
                p-6
                border
                border-white/15
                hover:-translate-y-3
                hover:border-cyan-400/50
                transition-all
                duration-500
                overflow-hidden
                ">
                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-purple-500/10
                  "
                />
                <div className="aspect-video overflow-hidden rounded-2xl mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                      w-full
                      h-full
                      object-cover
                      "
                    />
                  </div>
              <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
              <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs px-3 py-1 rounded-xl bg-white/10">
                    {tool}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-2xl bg-white text-slate-900 font-medium hover:scale-105 transition">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-8">Internships, Achievements & Certifications</h3>

        <div className="mb-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-cyan-400/20 shadow-xl">
          <p className="text-cyan-400 font-semibold text-sm mb-2">CURRENTLY PURSUING | APR 2026 – JUN 2026</p>
          <h4 className="text-3xl font-bold mb-3">AICTE EduSkills Virtual Internship — MERN Full Stack Development + Project</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Currently undergoing an 8-week structured MERN Full Stack Development internship focused on React, Tailwind CSS, Redux, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, deployment workflows, and a capstone e-commerce platform project. This internship strengthens my transition from UI/UX and software foundations into complete product development.
          </p>
          <div className="flex flex-wrap gap-3">
            {["React", "TailwindCSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Full Stack Project"].map((tech) => (
              <span key={tech} className="px-3 py-2 rounded-2xl bg-white/10 text-sm">{tech}</span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 border border-white/15">
        <div className="relative border-l border-cyan-500/30 ml-4 space-y-12">

  {[
    {
      role: "MERN Full Stack Intern",
      company: "AICTE EduSkills",
      year: "2026",
    },
    {
      role: "Android Developer Virtual Intern",
      company: "AICTE EduSkills",
      year: "2026",
    },
    {
      role: "UI/UX Intern",
      company: "Tech Mahindra",
      year: "2022",
    },
    
  ].map((item) => (
    <div key={item.role} className="relative pl-10">

      <div className="
        absolute
        -left-[11px]
        top-2
        w-5
        h-5
        rounded-full
        bg-cyan-400
        shadow-lg
        shadow-cyan-500/50
      "/>

      <div className="
        bg-white/[0.04]
        rounded-3xl
        p-6
        border
        border-white/10
      ">
        <p className="text-cyan-400 text-sm mb-2">
          {item.year}
        </p>

        <h4 className="text-2xl font-bold">
          {item.role}
        </h4>

        <p className="text-slate-300 mt-2">
          {item.company}
        </p>
      </div>
    </div>
  ))}
 </div>
</div>     
   
  <div className="space-y-6">
         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 border border-white/15">
            <h4 className="text-2xl font-semibold mb-4">Achievements</h4>
            <ul className="space-y-3 text-slate-300">
              {achievements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 border border-white/15">

            <h4 className="text-2xl font-semibold mb-4">Certifications</h4>
            <ul className="space-y-3 text-slate-300">
              {certifications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      </section>

<section
  id="contact"
  className="
  relative
  max-w-7xl
  mx-auto
  px-6
  py-28
  overflow-hidden
"
>
  <div
    className="
    relative
    rounded-[40px]
    border
    border-white/10
    bg-gradient-to-br
    from-cyan-500/10
    via-slate-950
    to-purple-500/10
    backdrop-blur-2xl
    overflow-hidden
    p-10
    lg:p-16
    "
  >

    {/* decorative glow */}

    <div
      className="
      absolute
      top-[-120px]
      right-[-100px]
      w-[320px]
      h-[320px]
      rounded-full
      bg-cyan-500/20
      blur-[120px]
      "
    />

    <div
      className="
      absolute
      bottom-[-120px]
      left-[-100px]
      w-[320px]
      h-[320px]
      rounded-full
      bg-purple-500/20
      blur-[130px]
      "
    />

    <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">

      {/* LEFT */}

      <div>

        <div
          className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-emerald-500/10
          border
          border-emerald-400/20
          mb-6
          "
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

          <span className="text-emerald-300 text-sm">
            Available for opportunities
          </span>
        </div>

        <h3 className="text-5xl font-extrabold leading-tight mb-6">
          Let’s Build
          <br />

          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Something Meaningful
          </span>
        </h3>

        <p
          className="
          text-slate-300
          text-lg
          leading-relaxed
          max-w-xl
          mb-10
          "
        >
          Open to internships, collaborations, hackathons and creative product
          opportunities in UI/UX, AI and software development.
          If you're building something exciting—I’d love to be part of it.
        </p>

        <div className="flex flex-wrap gap-4">

          <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=janakig.mvgrce24@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-7
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              font-semibold
              hover:scale-105
              transition
              shadow-xl
              inline-block
              "
            >
              Send Email
            </a>

          <a
            href="/JANAKI_GADU_RESUME.pdf"
            download
            className="
            px-7
            py-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            hover:bg-white/10
            transition
            "
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* RIGHT */}

      <div className="space-y-5">

        <a
          href="mailto:janakig.mvgrce24@gmail.com"
          className="
          group
          block
          rounded-3xl
          p-6
          bg-white/[0.04]
          border
          border-white/10
          hover:border-cyan-400/40
          hover:-translate-y-2
          transition-all
          duration-300
          "
        >
          <p className="text-sm text-slate-400 mb-2">
            EMAIL
          </p>

          <h4
            className="
            text-xl
            font-semibold
            group-hover:text-cyan-300
            transition
            "
          >
            janakig.mvgrce24@gmail.com
          </h4>
        </a>

        <a
          href="https://www.linkedin.com/in/janaki-gadu-b9a2b6337/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group
          block
          rounded-3xl
          p-6
          bg-white/[0.04]
          border
          border-white/10
          hover:border-cyan-400/40
          hover:-translate-y-2
          transition-all
          duration-300
          "
        >
          <p className="text-sm text-slate-400 mb-2">
            LINKEDIN
          </p>

          <h4
            className="
            text-xl
            font-semibold
            group-hover:text-cyan-300
            transition
            "
          >
            Connect with me professionally →
          </h4>
        </a>

        <a
          href="https://github.com/Janaki-gadu"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group
          block
          rounded-3xl
          p-6
          bg-white/[0.04]
          border
          border-white/10
          hover:border-cyan-400/40
          hover:-translate-y-2
          transition-all
          duration-300
          "
        >
          <p className="text-sm text-slate-400 mb-2">
            GITHUB
          </p>

          <h4
            className="
            text-xl
            font-semibold
            group-hover:text-cyan-300
            transition
            "
          >
            Explore my code & projects →
          </h4>
        </a>

      </div>

    </div>
  </div>
</section>
<footer className="text-center py-8 text-slate-500 text-sm">
  Designed & built with React, Tailwind & lots of curiosity ✦ Janaki Gadu
</footer>
    </div>
  );
}
