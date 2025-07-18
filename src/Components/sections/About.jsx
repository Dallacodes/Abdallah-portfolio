import RevealOnScroll from "../RevealOnScroll"

const About = () => {
     const frontEndSkills =[
        "React.js",
        "Vue.js",
        "Typecript",
        "Svelte",
        "Next.js"
     ]

     const backEndSkills =[
        "Node.js",
        "MongoDB",
        "GraphQL",
        "Python",
        "AWS"
     ]

  return (
    <section id="about" className=" min-h-screen flex items-center justify-center py-20  ">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
            <div className=" rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all   ">
                <p className=" text-gray-300 mb-6  ">
                    Passionate developer with expertise in building scalable web applications and creating innovative.
                </p>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap  gap-2">
                            {frontEndSkills.map((tech,key)=>(
                                <span key={key} className=" bg-blue-500/10 text-blue-500 rounded-full py-1 px-3 text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap  gap-2">
                            {frontEndSkills.map((tech,key)=>(
                                <span key={key} className=" bg-blue-500/10 text-blue-500 rounded-full py-1 px-3 text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className=" p-6 rounded-xl  border border-white/10  hover:-translate-y-1 transition-all ">
                    <h3 className=" text-xl font-bold mb-4  "> 🏫 Education</h3>
                    <ul className=" list-disc list-inside text-gray-300space-y-2 ">
                        <li>
                            <strong> B.S in Software Engineering   </strong>  -Uskudar University 
                            (2021-2025)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures,   Web Development, Cloud Computing...
                        </li>
                    </ul>
                </div>
                 <div className=" p-6 rounded-xl  border border-white/10  hover:-translate-y-1 transition-all ">
                    <h3 className=" text-xl font-bold mb-4  "> 🧳 Work Experience</h3>
                    <div className=" space-y-4 text-gray-300 ">
                            <div>
                                <h4 className="font-semibold"> Software Engineer at Weblayer ( January 2025 - May 2025 ) </h4>
                                <p> Developed and maintained microservices for cloud-based 
                                    applications.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold"> Intern at Weblayer (2024) </h4>
                                <p> 
                                    Assisted in building front-end components and integrating REST APIs 
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About