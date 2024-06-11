import { BrowserRouter, Route, Routes ,useParams } from "react-router-dom";
import React,{ useState, useEffect} from "react";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import FindTutors from "./Components/Pages/FindTutors"; 
import ContactUs from "./Components/Pages/ContactUs";
import ErrorPage from "./Components/Pages/404Page";
import SignIn from "./Components/Pages/SignIn";
import BookingPage from "./Components/Pages/Schedule";
import Profile from "./Components/Pages/Profile";
import TutorPage from "./Components/Pages/TutorPage";
import Footer from "./Components/Footer";
import ApplyToTeach from "./Components/Pages/ApplyToTeach";
import Register from "./Components/Pages/Register";
import StudentPage from "./Components/Pages/StudentPage";
import axios from "axios";
import CryptoJS from "crypto-js";


const App = () => {
 
  const [tutor , setTutor] = useState(null);
  const [balance, setBalance] = useState("");
  const [email , setEmail] = useState("");
  const [user, setUser] = useState(null); // เพิ่มตัวแปร user และ setUser ไว้ที่นี่
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser); // กำหนดค่า user จาก localStorage
        setEmail(parsedUser.email); // กำหนดค่า email จาก localStorage
        const decryptedName = CryptoJS.AES.decrypt(
          parsedUser.name,
          "secret_key"
        ).toString(CryptoJS.enc.Utf8);
        const decryptedSurname = CryptoJS.AES.decrypt(
          parsedUser.surname,
          "secret_key"
        ).toString(CryptoJS.enc.Utf8);
        setBalance(parsedUser.balance || ""); // กำหนดค่า balance จาก localStorage
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);
  
  

  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Header balance={balance} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FindTutors" element={<FindTutors />}  />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ApplyToTeach" element={<ApplyToTeach/>} />
          <Route path="/TutorPage/:id" element={<TutorPage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/StudentPage" element={<StudentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;