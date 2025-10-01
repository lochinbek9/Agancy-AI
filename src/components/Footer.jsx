import assets from "../assets/assets"
import { motion } from "framer-motion";

function Footer({ theme }) {
    return (
        <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="footer"
        className="bg-slate-50 dark:gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
            <motion.div
            initial={{opacity: 0, y: -30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            viewport={{once: true}}
            className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                <motion.div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme === "dark" ? assets.logo : assets.logo} className="w-32 sm:w-44" alt="" />
                    <p className="max-w-md">
                        From strategy to execution, we craft digital solutions that move your business forward.
                    </p>
                    <ul className="flex gap-8 mt-4">
                        <li>
                            <a href="#hero" className="hover:text-primary">Home</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-primary">Services</a>
                        </li>
                        <li>
                            <a href="#ourwork" className="hover:text-primary">Our Work</a>
                        </li>
                        <li>
                            <a href="#ourwork" className="hover:text-primary">Contact us</a>
                        </li>
                    </ul>
                </motion.div>
                <div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold">Subscribe to our newsletter</h3>
                    <p className="text-sm mt-3 mb-6">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex gap-2 text-sm">
                        <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
                        <button className="bg-primary text-white rounded px-6">Subscribe</button>
                    </div>
                </div>
            </motion.div>
            <hr className="border-gray-300 dark:border-gray-600 my-6" />
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
                <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Your Company. All rights reserved.</p>
                <div className="flex items-center justify-between gap-4">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </motion.div>

        </motion.footer>
    )
}

export default Footer