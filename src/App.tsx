import Footer from "./components/Footer/Footer";
import VisaSection from "./components/pages/section/visaSection/VisaSection";
import WhatNeed from "./components/pages/section/whatNeed/WhatNeed";
import Chance from "./components/pages/section/chance/Chance";
import GetVisa from "./components/pages/section/getVisa/GetVisa";
import Review from "./components/pages/section/review/Review";
import BuyVisa from "./components/pages/section/buyVisa/BuyVisa";
import About from "./components/pages/section/about/About";
import Consultation from "./components/pages/section/consultation/Сonsultation";




function App() {

  return (
    <>
        <main>
            <VisaSection/>
            <WhatNeed/>
            <Chance/>
            <GetVisa/>
            <Review/>
            <BuyVisa/>
            <About/>
            <Consultation/>
        </main>
        <Footer/>

    </>
  )
}

export default App
