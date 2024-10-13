import DownloadBtn from "../Utility/DownloadBtn";

export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center mx-auto py-6 md:py-12 px-3 md:px-6 lg:px-8 xl:px-24 gap-6 bg-[url('/src/assets/heroBg.png')] bg-contain bg-repeat-x">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-primary text-5xl md:text-8xl font-medium relative">
          Dollar investments that help you grow{" "}
          <span className="w-3 h-3 bg-primary_light rounded-full absolute transform translate-y-4 md:translate-y-7 ml-1"></span>{" "}
        </h1>
        <p className="text-lg md:text-xl px-6 md:px-0 md:w-3/5 text-rise_grey text-center md:text-justify tracking-wide">
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>

        <DownloadBtn />
      </div>
      <div>
        <img src="/src/assets/phone.png" alt="hero-image" />
      </div>
    </div>
  );
}
