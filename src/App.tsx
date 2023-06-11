import Footer from "./components/Footer/Footer";
import VisaSection from "./components/pages/section/visaSection/VisaSection";
import WhatNeed from "./components/pages/section/whatNeed/WhatNeed";
import Chance from "./components/pages/section/chance/Chance";
import GetVisa from "./components/pages/section/actionVisa/GetVisa";




function App() {

  return (
    <>
        <main>
            <VisaSection/>
            <WhatNeed/>
            <Chance/>
            <GetVisa/>
        </main>
        <Footer/>
    </>
  )
}

export default App
