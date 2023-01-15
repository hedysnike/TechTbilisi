import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="h-auto ml-auto mr-auto w-9/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center w-4/6 ml-auto mr-auto items-center text-black my-16"></div>
        <div className="text-black text-6xl	leading-[125%] mb-10 mt-28">
          TechTbilisi-ში ჩვენ გაწვდით <br /> თქვენთვის საჭირო <br /> ტექნოლოგიებს.
        </div>
        <div className="text-black text-lg text-right">
        <pre>საჭირო მომენტში • <br />მისაღებ ფასად • <br />ხელსაყრელ ადგილას • </pre></div>
        <div className="border-b-2 border-black border-solid mt-28"></div>
      </div>
      <div>
        <div className="ml-auto mr-auto w-9/12">
          <div className="text-white text-center gap-5 pt-10 mt-16 mb-16">
            <div className="text-black mb-4 pb-8 flex items-center">
              <img src="https://i.imgur.com/HdPQwdz.jpg" className="pr-16 pt-8 max-w-xl" />
              <div className="text-left px-16 mt-5 text-4xl">
                Macbook M1 / M2 <br />
                <Link to="/macbook">
                  {" "}
                  <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black hover:bg-black hover:text-white">
                    იხილეთ მეტი
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="text-white text-center gap-5 pt-10">
            <div className="text-black mb-4 pb-8 flex items-center justify-end">
              <div className="text-right pr-24 mt-5 text-4xl">
                Apple iPad M2 <br />
                <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black hover:bg-black hover:text-white">
                  იხილეთ მეტი
                </button>
              </div>
              <img src="https://i.imgur.com/HVSRn4C.jpg" className="px-16 pt-8 max-w-lg mb-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  <Link to="/">მთავარი</Link>;
}
