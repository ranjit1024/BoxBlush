import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import GameLandingPage from "./component/home";
import Game from "./component/game";
function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<GameLandingPage/>}/>
    <Route path="/game" element={<Game/>}/>
  </Routes>
  </BrowserRouter>
}
export default App;
