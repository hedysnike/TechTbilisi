import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import maks from "./products";
import macbookSizes from "./productss";

export default function Home() {
  return (
    <div>
      <div className="h-auto ml-auto mr-auto w-9/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center w-4/6 ml-auto mr-auto items-center text-black my-16"></div>
        <div className="text-black text-5xl">TechTbilisi-ში ჩვენ გაწვდით <br /> თქვენთვის საჭირო <br /> ტექნოლოგიებს</div>
        <div className="pb-1 bg-black mt-28"></div>

      </div>
      <div>
        <div className="ml-auto mr-auto w-9/12">
          <div className="text-white text-center gap-5 pt-10">
          
    <div className="text-black mb-4 pb-8 flex items-center">
      <img src="https://i.imgur.com/RlZAqNB.png" className="pr-16 pt-8 max-w-xl" />
      <div className="text-left px-16 mt-5 text-4xl">
      Macbook M1 <br />
      <Link to="/macbook"> <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black hover:bg-black hover:text-white">იხილეთ მეტი</button> </Link>
      </div>
    </div>
          </div>
          <div className="text-white text-center gap-5 pt-10">
              <div className="text-black mb-4 pb-8 flex items-center justify-end">
              <div className="text-right pr-24 mt-5 text-4xl">
      iPad Pro <br />
      <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black hover:bg-black hover:text-white">იხილეთ მეტი</button>
      </div>
                <img src="https://i.imgur.com/HVSRn4C.jpg" className="px-16 pt-8 max-w-lg" />
                </div>
                </div>

        </div>
      </div>
    </div>
  );
  <Link to="/">მთავარი</Link>;
}
