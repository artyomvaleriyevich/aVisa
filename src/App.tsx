import Footer from "./components/Footer/Footer";
import VisaSection from "./components/pages/section/visaSection/VisaSection";
import WhatNeed from "./components/pages/section/whatNeed/WhatNeed";
import Chance from "./components/pages/section/chance/Chance";
import GetVisa from "./components/pages/section/getVisa/GetVisa";
import Review from "./components/pages/section/review/Review";
import BuyVisa from "./components/pages/section/buyVisa/BuyVisa";
import About from "./components/pages/section/about/About";
import Consultation from "./components/pages/section/consultation/Сonsultation";
import Popup from "./components/Popup/Popup";
import {useState} from "react";




function App() {

    const [statusPopup,setStatusPopup] = useState(false)


  return (
    <>
        <main>
            <VisaSection statusPopup={statusPopup} setStatusPopup={setStatusPopup}/>
            <WhatNeed/>
            <Chance/>
            <GetVisa/>
            <Review/>
            <BuyVisa statusPopup={statusPopup} setStatusPopup={setStatusPopup}/>
            <About/>
            <Consultation statusPopup={statusPopup} setStatusPopup={setStatusPopup}/>
        </main>
        <Footer/>
        <Popup statusPopup={statusPopup} setStatusPopup={setStatusPopup}/>
    </>
  )
}

export default App
