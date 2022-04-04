import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import DashBoard from "./components/DashBoard/DashBoard";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reviews' element={<Reviews />} />
      <Route path='/dashboard' element={<DashBoard />}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/*' element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
