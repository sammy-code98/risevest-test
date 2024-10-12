export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center mx-auto py-6 md:py-2 px-3 md:px-6 lg:px-8 xl:px-24 gap-6">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-primary text-5xl md:text-8xl font-medium relative">
          Dollar investments that help you grow{" "}
          <span className="w-3 h-3 bg-primary_light rounded-full absolute transform translate-y-4 md:translate-y-7 ml-1"></span>{" "}
        </h1>
        <p className="text-xl px-6 md:px-0 md:w-3/5 text-rise_grey tracking-wide">
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>

        <div className="py-4 flex justify-center md:justify-start items-center gap-3 md:gap-6">
          <button className="flex items-center gap-2 py-2 px-3  md:px-6 bg-rise_black rounded-lg">
            <img src="/src/assets/apple.svg" alt="apple"  className="h-8 md:h-10"/>
            <div>
              <p className="text-white text-sm font-regular">Download on the </p>
              <p className="text-white text-base font-bold">App Store</p>
            </div>
          </button>

          <button className="flex items-center gap-2 py-2 px-3 md:px-6 bg-rise_black rounded-lg">
            <img src="/src/assets/playstore.svg" alt="google"  className="h-8 md:h-10"/>
            <div>
              <p className="text-white text-sm font-regular">Download on the </p>
              <p className="text-white text-base font-bold">Google Play</p>
            </div>
          </button>
        </div>
      </div>
      <div>
        <img src="/src/assets/phone.png" alt="hero-image" />
      </div>
    </div>
  );
}
