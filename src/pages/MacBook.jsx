import maks from "./products";
import MacFag from "../components/macfag";

export default function MacBook() {
  return (
    <div className="h-auto min-h-[74.3vh] ">
      <div className="w-9/12 ml-auto mr-auto">
        <header className="py-12 p-2 mt-20 text-3xl font-extrabold">
          <div>Apple MacBook's</div> <div></div>
        </header>
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 justify-center items-center gap-1 gap-y-10 justify-items-center">
          {maks.map((mak) => (
            <MacFag name={mak.name} price={mak.price} id={mak.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
