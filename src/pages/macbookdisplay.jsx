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
        <div className="min-h-screen w-4/6 mr-auto ml-auto grid grid-cols-1 sm:grid-cols-2 mt-16">
          <div>
            <img src="https://i.imgur.com/5PyPjFK.jpg" />{" "}
          </div>
          <div className="text-black ml-8">
            <h1 className="text-3xl tracking-wide">
              {product.name} <br />
            </h1>
            <h2 className="text-gray-700">{product.price} ₾</h2>
            <div>
              <h3 className="pt-4 sm:pt-0">
              უფასო მიტანის სერვისი შესაძლებელია თბილისის მაშტაბით.! <br />
               </h3> 
              <br /> 
              <div className="mb-4 sm:mb-0 text-center">
                {" "}
                <a
                  href="tel:+995571174686"
                  className="border border-solid border-black p-3 rounded hover:bg-slate-900 hover:text-white"
                >
                  შეგვეხმიანეთ შესაძენად
                </a>
                
              </div>
              <h1 className="pt-4 font-extrabold  text-lg">მონაცემები</h1> <br />
              ოპერატიული: {product.RAM} <br />
              მეხსიერება: {product.Storage} <br />
              მოდელი: {product.Processor} <br />
              დამტენი: 140ვატ <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
