import { Link } from "react-router-dom";

export default function MacFag({ name, price, id }) {
    return (
      <Link className="bg-white font-bold w-full h-full p-1 hover:border-b hover:border-black hover:border-solid" to={`/macbook/${id}`}>
        <img src="https://i.imgur.com/RlZAqNB.png" /> <br />
        {name} <br />
        <span className="font-normal text-sm text-[#666666]">{price} ₾</span>
      </Link>
    );
  }