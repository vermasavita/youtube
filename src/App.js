import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { SideBar } from "./components/sidebar/Sidebar";
import { VideoListing } from "./pages/VideoListing/VideoListing";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
      <Route path="/" element={<VideoListing/>}/>
      </Routes>
    </div>
  );
}

export default App;
