import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="w-9/12 ml-auto mr-auto pt-3 pb-3 relative mb-10">
        <div className=" pl-2 p-1 absolute">
          <img className="max-w-xs" src="https://i.imgur.com/b23nDJ1.png" />
      </div>
      <div className=" text-black">
        <div className="flex gap-20 text-lg justify-end pt-9">
        <Link to="/">მთავარი</Link>
          <Link to="/macbook">MacBooks</Link>
          <Link to="/contact">კონტაქტი</Link>
          <Link to="/else">ჩვენს შესახებ</Link>
        </div>
      </div>
    </div>
  );
}
