
import { company_logos } from "../assets/assets"
import { motion } from "framer-motion"

function TrustedBy() {
  return (
    <motion.section 
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5, ease:"easeInOut"}}
    viewport={{once:true}}
    className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
        <motion.h3 
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3, ease:"easeInOut"}}
        viewport={{once:true}}
        className="dark:text-white font-semibold">Trusted by Leading Companies</motion.h3>
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5, delay:0.4, ease:"easeInOut"}}
        viewport={{once:true}}
        className="flex items-center justify-center flex-wrap gap-10 m-4 dark:text-white pb-5">
            {company_logos.map((logo, index) =>(
                <motion.img 
                variants={{
                  hidden: {opacity:0, y:20},
                  visible: {opacity:1, y:0}
                }}
                transition={{duration:0.5, ease:"easeInOut", delay: index * 0.1}}
                src={logo} key={index} alt="" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
            ))}
        </motion.div>
    </motion.section>
  )
}

export default TrustedBy