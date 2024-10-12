export default function Regulation(): JSX.Element {
  return (
    <div className="py-12">
      <div className="w-full  bg-red-200 h-[500px] flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center space-y-4">
          <h1 className="text-rise_black text-3xl md:text-5xl font-medium">
            How we are Regulated
          </h1>
          <p className="text-rise_black text-lg md:text-xl text-center tracking-wide md:w-1/3">
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </p>
        </div>
      </div>
    </div>
  );
}
