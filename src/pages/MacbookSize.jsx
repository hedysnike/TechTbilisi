import maks from "./products";
import { useParams } from "react-router-dom";
import MacFag from "../components/macfag";

export default function MacBooksize() {
  const { Screen } = useParams();
  const sizes = maks.filter((p) => p.Screen === Screen);
  return (
    <div className="h-auto bg-[#f7f7f7]">
      <div className="max-w-6xl ml-auto mr-auto min-h-screen">
        <header className="grid grid-cols-2 p-12">
          <div>Macbook კატალოგი</div> <div></div>
        </header>
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-12 justify-center items-center gap-1 gap-y-10 justify-items-center text-Black">
          {sizes.map((mak) => (
            <MacFag name={mak.name} price={mak.price} id={mak.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
