import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import maks from "./products";
import MacFag from "../components/macfag";

export default function Home() {
  return (
    <div>
      <div className="h-auto ml-auto mr-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center w-4/6 ml-auto mr-auto items-center text-black my-16">
          <div className="font-extrabold hover:bg-gray-100 pt-8 border border-black border-hidden hover:border-solid">
            {" "}
            <Link to="/macboo/13 Inch">
              {" "}
              MACBOOK 13 INCH M2
              <br />
              <h6 className="text-[#006eff] text-xs pb-4"> იხილეთ ყველა</h6>
              <img src="https://i.imgur.com/Gu29TzA.png" className=" pb-2 px-8" />
              <h6 className="text-xs pb-10"> იხილეთ 13Inch ზომის Macbook-ები</h6>
            </Link>
          </div>
          <div className="font-extrabold hover:bg-gray-100 pt-8 border border-black border-hidden hover:border-solid">
            <Link to="/macboo/14 Inch">
              MACBOOK M1 14 INCH <br />
              <h6 className="text-[#006eff] text-xs pb-4"> იხილეთ ყველა</h6>
              <img src="https://i.imgur.com/rAx2P6e.jpg" className="pb-2 px-8" />
              <h6 className="text-xs pb-10"> იხილეთ 14Inch ზომის Macbook-ები</h6>
            </Link>
          </div>
          <div className="font-extrabold hover:bg-gray-100 pt-8 border border-black border-hidden hover:border-solid">
            <Link to="/macboo/16 Inch">
              MACBOOK 16 INCH M1 <br />
              <h6 className="text-[#006eff] text-xs pb-4"> იხილეთ ყველა</h6>
              <img src="https://i.imgur.com/rAx2P6e.jpg" className="pb-2 px-8" />
              <h6 className="text-xs pb-10"> იხილეთ 16Inch ზომის Macbook-ები</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-14 bg-black"></div>
      <div className="bg-[#202020]">
        <div className="ml-auto mr-auto max-w-7xl">
          <div className="text-white text-center grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10">
            {maks.map((mak) => (
              <MacFag name={mak.name} price={mak.price} id={mak.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  <Link to="/">მთავარი</Link>;
}
