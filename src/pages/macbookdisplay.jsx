import maks from "./products";
import { useParams } from "react-router-dom";
import MacFag from "../components/macfag";

export default function MacbookDisplay() {
  const { id } = useParams();
  const product = maks.find((mak) => mak.id == id);
  if (!product) {
    return <div>პროდუქტი არ მოიძებნა</div>;
  }
  return (
    <div>
      <div className="h-auto">
        <div className="min-h-screen w-4/6 mr-auto ml-auto grid grid-cols-2 mt-16">
          <div>
            <img src="https://i.imgur.com/5PyPjFK.jpg" />{" "}
          </div>
          <div className="text-black ml-8">
            <h1 className="text-3xl tracking-wide">
              {product.name} <br />
            </h1>
            <h2 className="text-gray-700">{product.price}</h2>
            <h3>
              უფასო მიტანის სერვისი შესაძლებელია თბილისის მაშტაბით.! <br />
              შესაძენად შეგვეხმიანეთ შემდგომ ნომერზე <br /> <br />
              <div className="text-center">
                {" "}
                <a
                  href="tel:+995571174686"
                  className="border border-solid border-black p-3 rounded hover:bg-slate-900 hover:text-white"
                >
                  შეგვეხმიანეთ შესაძენად
                </a>
              </div>
              <h1 className="font-extrabold  text-lg">მონაცემები</h1> <br />
              ოპერატიული: {product.RAM} <br />
              მეხსიერება: {product.Storage} <br />
              მოდელი: {product.Processor} <br />
              დამტენი: 140ვატ <br />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
