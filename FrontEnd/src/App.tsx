import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import GameLandingPage from "./pages/home";
import Game from "./pages/game";
function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<GameLandingPage/>}/>
    <Route path="/game" element={<Game/>}/>
  </Routes>
  </BrowserRouter>
}
export default App;
