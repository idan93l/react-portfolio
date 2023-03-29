import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [selectedPage, seSelectedPage] = useState('home')
  const isAboveMediaQuery = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue ">
      <Navbar selectedPage={selectedPage} set={selectedPage}/>
    </div>
  );
}

export default App;
