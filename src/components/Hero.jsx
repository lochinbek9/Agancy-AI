import assets from "../assets/assets"


function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <div>
        <img src={assets.group_profile} alt="" />
        <p>Trusted by 10K+ people</p>
      </div>
    </section>
  )
}

export default Hero