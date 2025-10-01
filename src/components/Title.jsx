import {motion} from "framer-motion"

function Title({title, desc}) {
  return (
    <>
        <motion.h2
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:"easeInOut"}}
        viewport={{once:true}}
        className="text-3xl sm:text-5xl font-medium dark:text-white">{title}</motion.h2>  
        <motion.p
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, ease:"easeInOut"}}
        viewport={{once:true}}
        className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-5">{desc}</motion.p> 
    </>
  )
}

export default Title