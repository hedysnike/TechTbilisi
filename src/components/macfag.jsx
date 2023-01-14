import { Link } from "react-router-dom";

export default function MacFag({ name, price, id }) {
  return (
    <Link to={`/macbook/${id}`}>
      <div className=" shadow-[#101010] shadow-2xl bg-[#101010] mb-4 pb-8">
        <img src="https://i.imgur.com/o5hGuML.jpg" className="px-16 pt-8" />
        <div className="text-left px-16 mt-5">
        <span className="font-normal text-sm "> ფასი: {price} ₾</span>
        <br />
        {name} <br />
        <button className="border p-2 text-sm mt-4 mb-2 border-solid border-white">იხილეთ მეტი</button>
        </div>
      </div>
    </Link>
  );
}
