import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="h-auto ml-auto mr-auto lg:w-3/4 w-5/6">
        <div className="text-black text-4xl lg:text-6xl	lg:leading-[125%] mb-10 lg:mt-44 mt-24">
          TechTbilisi-ში ჩვენ გაწვდით <br /> თქვენთვის საჭირო <br /> ტექნოლოგიებს.
        </div>
        <div className="text-black lg:text-lg text-right">
        <pre>საჭირო მომენტში • <br />მისაღებ ფასად • <br />ხელსაყრელ ადგილას • </pre></div>
        <div className="border-b-2 border-black border-solid mt-24"></div>
      </div>
        <div className="ml-auto mr-auto lg:w-9/12 w-5/6">
          <div className="text-white text-center gap-5 pt-10 my-16">
            <div className="text-black mb-4 pb-8 lg:flex lg:items-center">
              <img src="https://i.imgur.com/HdPQwdz.jpg" className="lg:pr-16 pt-8 lg:max-w-xl max-w-xs" />
              <div className="lg:text-left text-center lg:px-16 mt-5 text-2xl lg:text-4xl">
                Macbook M1 / M2 <br />
                <Link to="/macbook">
                  <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black hover:bg-black hover:text-white">
                    იხილეთ მეტი
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="text-white text-center gap-5 lg:pt-10">
            <div className="text-black mb-4 pb-8 lg:flex lg:items-center lg:justify-end">
              <div className="text-center mt-5 lg:text-right lg:pr-24 text-2xl lg:text-4xl">
                Apple iPad M2 <br />
                <button className="border p-2 text-sm mt-4 mb-2 border-solid border-black hover:bg-black hover:text-white">
                  იხილეთ მეტი
                </button>
              </div>
              <img src="https://i.imgur.com/HVSRn4C.jpg" className="px-16 pt-8 lg:max-w-lg mb-12 max-w-xs"/>
            </div>
          </div>
        </div>
    </div>
  );
}
