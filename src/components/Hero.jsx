import profilePic from "../assets/Profile.png"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration: 0.5, delay:delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center  ">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible" 
                    className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Sai Rohit</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible" 

                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> Full Stack Developer </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"className="my-2 max-w-xl py-6 font-light tracking-tighter ">{`I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Prisma, PostgreSQL, and MongoDB. My expertise extends to working with WebSockets, Redis, Pub/Sub architectures, and queues for building real-time, high-performance systems. Additionally, I have experience leveraging AWS for cloud services and GitHub for version control and collaborative development. My goal is to utilize my diverse skill set to create innovative solutions that drive business growth and deliver exceptional user experiences.`}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-10">
            <motion.div 
            initial = {{x:100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{duration: 1, delay:1.2}}
            className="flex items-center justify-center h-fullr">
              <img src={profilePic} alt="" />
            </motion.div>
            </div>
        </div>
    </div>
  ) 
}

export default Hero