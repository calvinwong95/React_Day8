import {Routes,Route} from "react-router-dom";
import Home from "./containers/home";
import Details from "./containers/details";


function App() {
  return (
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Home />} />
    </Routes>
    
  );
}

export default App;
