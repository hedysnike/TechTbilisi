import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

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
              <img
                src="https://i.imgur.com/Gu29TzA.png"
                className=" pb-2 px-8"
              />
              <h6 className="text-xs pb-10">
                {" "}
                იხილეთ 13Inch ზომის Macbook-ები
              </h6>
            </Link>
          </div>
          <div className="font-extrabold hover:bg-gray-100 pt-8 border border-black border-hidden hover:border-solid">
            <Link to="/macboo/14 Inch">
              MACBOOK 14 INCH M1 <br />
              <h6 className="text-[#006eff] text-xs pb-4"> იხილეთ ყველა</h6>
              <img
                src="https://i.imgur.com/rAx2P6e.jpg"
                className="pb-2 px-8"
              />
              <h6 className="text-xs pb-10">
                {" "}
                იხილეთ 14Inch ზომის Macbook-ები
              </h6>
            </Link>
          </div>
          <div className="font-extrabold hover:bg-gray-100 pt-8 border border-black border-hidden hover:border-solid">
            <Link to="/macboo/16 Inch">
              MACBOOK 16 INCH M1 <br />
              <h6 className="text-[#006eff] text-xs pb-4"> იხილეთ ყველა</h6>
              <img
                src="https://i.imgur.com/rAx2P6e.jpg"
                className="pb-2 px-8"
              />
              <h6 className="text-xs pb-10">
                {" "}
                იხილეთ 16Inch ზომის Macbook-ები
              </h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#262626] pt-4 mb-8 pb-10 h-6"></div>
      <div className="ml-auto mr-auto max-w-7xl m-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-2/3 gap-5 text-black ">
          <div>
            <img src="https://i.imgur.com/UTFt4Ig.jpg" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-center">რატომ Macbook-ი ?</h1>
            <h1>
              შექმნილი პროფესიონალებისთვის. ყველაზე ძლიერი MacBookი უკვე აქ
              არის. უზომოდ სწრაფი M1 Pro ან M1 Max ჩიპით - Apple-ის პირველი
              სილიკონი, რომელიც შექმნილია პროფესიონალებისთვის - თქვენ მიიღებთ
              ინოვაციურ პროგრამულ უზრუნველყოფას და საოცარი ბატარეის
              ხანგრძლივობას. ამას დაუმატეთ განსაცვიფრებელი Liquid Retina XDR
              ეკრანი, საუკეთესო კამერა და აუდიო ოდესმე Mac ნოუთბუქში და ყველა
              თქვენთვის საჭირო პორტი. პირველი ლეპტოპი ამ სახის, MacBook Pro არის
              ნამდვილად შეუდარებელი.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
  <Link to="/">მთავარი</Link>;
}
