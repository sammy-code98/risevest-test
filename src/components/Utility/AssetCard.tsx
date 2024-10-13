import { IoIosArrowRoundForward } from "react-icons/io";
import { AssetCardI } from "../../types/index.interface";

export default function AssetCard({
  bgColor,
  title,
  imgSrc,
  description,
  history,
  risk,
}: AssetCardI): JSX.Element {
  return (
    <div
      className="md:w-4/5  border border-rise_border rounded-xl pb-12"
      style={{ minHeight: "535px" }}
    >
      <div
        className="h-1/3 rounded-t-xl flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="bg-white rounded-full w-[115px] h-[115px] flex justify-center items-center  tranform translate-y-20 top-0">
          <img src={imgSrc} alt="icon image" />
        </div>
      </div>

      <div className="mt-24 p-2 space-y-2">
        <h3 className="text-center text-rise_black text-xl md:text-2xl font-medium">
          {title}
        </h3>
        <p className="text-rise_grey text-center text-sm md:text-base px-2">
          {description}
        </p>
      </div>
      <div className="py-2 space-y-1 flex flex-col justify-center items-center">
        <p className="text-sm md:text-base text-rise_grey">
          Historical returns: <span className="text-rise_black">{history}</span>
        </p>
        <p className="text-sm md:text-base text-rise_grey">
          Risk Level: <span className="text-rise_black">{risk}</span>
        </p>
      </div>
      <div className="flex justify-center items-center py-4">
        <button className="p-2 flex text-base font-medium text-primary rounded-xl hover:bg-rise_teal transition duration-300">
          Learn how {title} work <IoIosArrowRoundForward className="mt-1" />
        </button>
      </div>
    </div>
  );
}
