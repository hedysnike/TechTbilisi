import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div className="bg-[#201f20]">
        <div className="w-4/6 ml-auto mr-auto pt-3 pb-3">
          <img src="https://cdn.shopify.com/s/files/1/0012/6569/6817/files/Untitled-4_1_350x.png?v=1613189550" />
        </div>
      </div>
      <div className="bg-[#201f20] text-white pt-4 pb-5">
        <div className="flex w-4/6 ml-auto mr-auto gap-6 justify-center sm:justify-start">
          <Link to="/">მთავარი</Link>
          <Link to="/macbook">MacBooks</Link>
          <Link to="/contact">კონტაქტი</Link>
          <Link to="/else">ჩვენს შესახებ</Link>
        </div>
      </div>
    </div>
  );
}
