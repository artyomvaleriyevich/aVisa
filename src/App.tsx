import Footer from "./components/Footer/Footer";
import VisaSection from "./components/pages/section/visaSection/VisaSection";
import WhatNeed from "./components/pages/section/whatNeed/WhatNeed";
import Chance from "./components/pages/section/chance/Chance";
import ActionVisa from "./components/pages/section/actionVisa/ActionVisa";




function App() {

  return (
    <>
        <main>
            <VisaSection/>
            <WhatNeed/>
            <Chance/>
            <ActionVisa/>
        </main>
        <Footer/>
    </>
  )
}

export default App
