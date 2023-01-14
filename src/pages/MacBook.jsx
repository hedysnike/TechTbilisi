import maks from "./products";
import MacFag from "../components/macfag";

export default function MacBook() {
  return (
    <div className="h-auto min-h-[74.3vh] ">
      <div className="max-w-6xl ml-auto mr-auto">
        <header className="p-12 font-extrabold">
          <div>Apple MacBook კატალოგი</div> <div></div>
        </header>
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-12 justify-center items-center gap-1 gap-y-10 justify-items-center text-Black">
          {maks.map((mak) => (
            <MacFag name={mak.name} price={mak.price} id={mak.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
