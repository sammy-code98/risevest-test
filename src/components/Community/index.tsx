export default function Community(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-2xl py-6 md:py-2 gap-8 md:gap-12">
      <div className="md:w-2/4 md:px-12">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-5xl text-rise_black font-medium text-center md:text-justify">
            Join The Rise Community
          </h1>
          <p className="md:w-4/5 tracking-wide text-lg md:text-xl text-rise_grey text-center md:text-justify px-2">
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </p>
        </div>
        <div className="py-6 flex justify-center items-center md:justify-start">
          <button className="py-3 px-8 text-rise_black font-medium bg-primary_light rounded-md hover:opacity-50">
          Join our Community
          </button>
        </div>
      </div>
      <div className="order-first md:order-last px-3">
        <img src="/src/assets/join.png" alt="hero-image"/>
      </div>
    </div>
  );
}
