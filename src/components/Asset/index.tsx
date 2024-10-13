import { AssetCardData } from "../../staticData";
import AssetCard from "../Utility/AssetCard";

export default function Asset(): JSX.Element {
  return (
    <div className="w-11/12 mx-auto max-w-screen-2xl py-8">
      <div className="flex flex-col justify-center items-center space-y-3">
        <h2 className="text-rise_black text-3xl md:text-5xl font-medium">
          Asset Classes
        </h2>
        <p className="text-rise_black text-lg md:text-xl">
          It’s your money, choose where you invest it
        </p>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-3 justify-items-center place-items-center gap-6">
        {AssetCardData.map((asset) => (
          <AssetCard
            key={asset.title}
            title={asset.title}
            description={asset.description}
            history={asset.history}
            risk={asset.risk}
            bgColor={asset.bgColor}
            imgSrc={asset.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
