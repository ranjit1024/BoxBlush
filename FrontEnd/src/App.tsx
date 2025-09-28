import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from "./component/home";
import { Game } from "./component/game";
import { myContext } from "./component/context";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game color="red"/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
