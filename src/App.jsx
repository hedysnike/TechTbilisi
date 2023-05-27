import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import MacBook from "./pages/MacBook";
import Navigation from "./components/navigation";
import Bottom from "./components/bottom";
import MacbookDisplay from "./pages/macbookdisplay";
import MacBooksize from "./pages/MacbookSize";
import { ScrollArea } from "@mantine/core";


function App() {
  return (
    <BrowserRouter>
      <ScrollArea className="h-screen" scrollbarSize={17}>
      <Navigation></Navigation>
      <Routes>
        <Route index element={<Home />} />
        <Route path="macbook" element={<MacBook />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/macbook/:id" element={<MacbookDisplay />} />  
        <Route path="Macboo/:Screen" element={<MacBooksize />} />
      </Routes>
      <Bottom></Bottom>
      </ScrollArea>
    </BrowserRouter>
  );
}
export default App;
