export default function Contact() {
  return (
    <div className="h-auto">
      <div className="grid grid-cols-2 gap-8 w-4/6 ml-auto mr-auto h-screen">
        <div className="text-black mt-8 text-center">
          <h1 className="text-lg">დაგვიკავშირდით:</h1>
          <br />
          <br />
          Phone Number - 555 55 55 55 <br />
          WhatsApp - 555 55 55 55 <br />
          Telegram - @xxxxxxxxx <br />
          Email - arebanikko@gmail.com <br />
        </div>
        <div className="m-8 text-black text-center">
          უკუკავშირის ფორმა
          <div className="grid justify-center">
            <div className="py-8">
              <input
                className="text-black p-1 rounded mr-1 border border-solid border-gray-700"
                type="text"
                placeholder="სახელი"
              />
              <input
                className="text-black p-1 rounded ml-1 border border-solid border-gray-700"
                type="text"
                placeholder="ტელეფონი"
              />
            </div>
            <input
              className="pb-40 pt-1 pl-1 pr-1 text-black rounded"
              type="text"
              placeholder="შეტყობინება"
            />{" "}
            <button className="bg-black text-white mx-auto px-4 rounded mt-6">
              გაგზავნა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}