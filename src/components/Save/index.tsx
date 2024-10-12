
export default function Save():JSX.Element {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-2xl py-6 md:py-2 gap-6 md:gap-12">
         <div>
        <img src="/src/assets/save.png" alt="hero-image" />
      </div>
      <div className="md:w-2/4">
      <div className="space-y-4">
      <p className="text-rise_black text-base md:text-xl text-center md:text-justify">The  Rise App</p>
      <h1 className="text-3xl md:text-5xl text-rise_black font-medium text-center md:text-justify">Save for your <span className="text-rise_purple">future</span></h1>
      <p className="md:w-4/5 tracking-wide text-lg md:text-xl text-rise_grey text-center md:text-justify px-2">With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.
      </p>
      </div>
      <div className="py-6 flex justify-center items-center md:justify-start">
        <button className="py-3 px-8 text-white font-medium bg-primary rounded-md hover:opacity-50">Start Saving</button>
      </div>
      </div>
    </div>
  )
}
