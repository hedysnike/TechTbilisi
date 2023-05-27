import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="bg-[#2d2d2f] flex justify-between items-center text-white pt-5 px-8 pb-3">
            <Link className="hover:border-b-2 hover:border-[#b9b9b9] hover:border-solid pb-1" to="/">
              მთავარი
            </Link>
            <br />
            <Link className="hover:border-b-2 hover:border-[#b9b9b9] hover:border-solid pb-1" to="/macbook">
              პროდუქცია
            </Link>
            <br />
            <Link className="hover:border-b-2 hover:border-[#b9b9b9] hover:border-solid pb-1" to="/contact">
              კონტაქტი
            </Link>
    </div>
  );
}
