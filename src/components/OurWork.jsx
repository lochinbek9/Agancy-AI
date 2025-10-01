import assets from "../assets/assets";
import Title from "./Title"

import { motion } from "framer-motion";

function OurWork() {
  const workData = [
    {
      title: "Mobile app marketing",
      description: "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app
    },
    {
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management
    },
    {
      title: "Fitness app promotion",
      description: "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app
    }
  ];
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ staggerChildren: 0.6 }}
    id="ourwork" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 dark:bg-blue-950 text-gray-900 dark:text-white">
        <Title title="Our latest word" desc="From strategy to execution, we craft digital solutions that move your business forward."/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {
            workData.map((work, index) =>(
              <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
              key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                 <img src={work.image} className="w-full rounded-xl" alt="" />
                 <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                <p className="text-sm opacity-60 w-5/6">
                {work.description}
                </p>
              </motion.div>
            ))
          }
        </div>
    </motion.div>
  )
}

export default OurWork