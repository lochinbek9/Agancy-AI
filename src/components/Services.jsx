
import assets from "../assets/assets"
import ServiceCard from "./ServiceCard"
import Title from "./Title"
import {motion} from "framer-motion"


function Services() {
    const servicesData = [
        {
            title: "Adversting",
            description: "We turn bold ideas into powerful brands through strategic advertising campaigns that captivate and convert.",
            icon: assets.ads_icon
        },
        {
            title: "Content marketing",
            description: "Crafting compelling narratives that resonate with your audience and drive engagement through strategic content marketing.",
            icon: assets.marketing_icon
        },
        {
            title: "Content writing",
            description: "Delivering clear, concise, and engaging content that effectively communicates your message and captivates your audience.",
            icon: assets.content_icon
        },
        {
            title: "Social media",
            description: "Building and nurturing vibrant online communities through strategic social media management and engagement.",
            icon: assets.social_icon
        }
    ]
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 dark:bg-blue-950 text-gray-900 ">
        <img src={assets.bgImage2} alt=""  className="absolute -top-110 -left-70 -z-1 dark:hidden"/>
        <Title title="How can we help?" desc="From strategy to exucation, we craft digital solutions that move your business forward."/>
        <div className="flex flex-col md:grid grid-cols-2">
         {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Services