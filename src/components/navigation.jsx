import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="w-9/12 ml-auto mr-auto pt-3 pb-3 relative mb-10">
        <div className=" pl-2 p-1 absolute">
          <img className="max-w-xs" src="https://i.imgur.com/b23nDJ1.png" />
      </div>
      <div className=" text-black">
        <div className="flex gap-16 text-xl justify-end pt-9">
        <Link className="hover:border-b-2 hover:border-black hover:border-solid" to="/">მთავარი</Link>
          <Link className="hover:border-b-2 hover:border-black hover:border-solid" to="/macbook">პროდუქცია</Link>
          <Link className="hover:border-b-2 hover:border-black hover:border-solid" to="/contact">კონტაქტი</Link>
          <Link className="hover:border-b-2 border-b-2 border-transparent  hover:border-black hover:border-solid" to="/else">ჩვენს შესახებ</Link>
        </div>
      </div>
    </div>
  );
}
