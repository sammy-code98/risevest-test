export default function DownloadBtn(): JSX.Element {
  return (
    <div className="py-4 flex justify-center md:justify-start items-center gap-3 md:gap-6">
      <button className="flex items-center gap-2 py-2 px-3  md:px-6 bg-rise_black rounded-lg">
        <img src="/src/assets/apple.svg" alt="apple" className="h-8 md:h-10" />
        <div>
          <p className="text-white text-sm font-regular">Download on the </p>
          <p className="text-white text-base font-bold">App Store</p>
        </div>
      </button>

      <button className="flex items-center gap-2 py-2 px-3 md:px-6 bg-rise_black rounded-lg">
        <img
          src="/src/assets/playstore.svg"
          alt="google"
          className="h-8 md:h-10"
        />
        <div>
          <p className="text-white text-sm font-regular">Download on the </p>
          <p className="text-white text-base font-bold">Google Play</p>
        </div>
      </button>
    </div>
  );
}
