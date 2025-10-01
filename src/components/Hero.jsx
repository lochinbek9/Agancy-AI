import assets from "../assets/assets"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="test-xs font-medium">Trusted by 10K+ people</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">Turning imagination into <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">digital</span>  impact.</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}>Creating meaningful connections and turning big ideas into interactive digital experiences</motion.p>
      <motion.div 
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
       viewport={{ once: true }}
      className="relative w-full flex justify-center">
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
        <img src={assets.bgImage1} alt="" className="absolute -top-40 -right-40 sm:-top-100 sm:right-70 -z-1 dark:hidden" />
      </motion.div>
    </section>
  )
}

export default Hero