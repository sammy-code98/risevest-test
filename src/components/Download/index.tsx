import DownloadBtn from "../Utility/DownloadBtn";

export default function Download(): JSX.Element {
  return (
    <div className="py-12 px-4">
      <div className="relative flex flex-col md:flex-row justify-between items-center bg-rise_teal rounded-3xl mx-auto max-w-screen-2xl h-[400px] px-4 md:px-20 py-6 md:py-12 gap-8 md:gap-12 overflow-hidden">
        <div className="md:w-2/4">
          <div className="space-y-2">
            <p className="text-primary text-base font-medium text-center md:text-justify">
              Download The Rise App{" "}
            </p>
            <h1 className="md:w-3/4 text-3xl md:text-4xl text-rise_black font-medium text-center md:text-justify">
              Join our 100,000 users investing and setting long term goals!
            </h1>
            <p className="md:w-4/5 tracking-wide text-base md:text-lg text-rise_grey text-center md:text-justify px-2">
              Dollar investments that help you grow.
            </p>
          </div>

          <DownloadBtn />
        </div>

        <div className="md:absolute md:right-12  md:bottom-0   md:tranform -translate-y-8 md:translate-y-5 ">
          <img src="/images/users.png" alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
