import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="w-9/12 ml-auto mr-auto pt-3 pb-3 relative mb-10">
        <div className="bg-black pl-2 p-1 absolute">
          <img className="bg-black" src="https://cdn.shopify.com/s/files/1/0012/6569/6817/files/Untitled-4_1_350x.png?v=1613189550" />
      </div>
      <div className=" text-black">
        <div className="flex gap-20 text-lg justify-end pt-9">
          <Link to="/macbook">MacBooks</Link>
          <Link to="/contact">კონტაქტი</Link>
          <Link to="/else">ჩვენს შესახებ</Link>
        </div>
      </div>
    </div>
  );
}
