import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import maks from "./products";

export default function Home() {
  return (
    <div>
      <div className="h-auto ml-auto mr-auto w-9/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center w-4/6 ml-auto mr-auto items-center text-black my-16"></div>
        <div className="text-black font-bold text-5xl">TechTbilisi-ში ჩვენ გაწვდით <br /> თქვენთვის საჭირო <br /> ტექნოლოგიებს</div>
        <div className="pb-1 bg-black mt-28"></div>

      </div>
      <div>
        <div className="ml-auto mr-auto w-9/12">
          <div className="text-white text-center grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10">
            {maks.map((mak) => (
    <Link to={`/macbook/${mak.  id}`}>
    <div className="text-black mb-4 pb-8">
      <img src="https://i.imgur.com/o5hGuML.jpg" className="px-16 pt-8" />
      <div className="text-left px-16 mt-5">
      <span className="font-normal text-sm "> ფასი: {mak.price} ₾</span>
      <br />
      {mak.name} <br />
      <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black">იხილეთ მეტი</button>
      </div>
    </div>
  </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
  <Link to="/">მთავარი</Link>;
}
