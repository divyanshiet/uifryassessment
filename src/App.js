import './index.css'
import Header from './component/header/Header'
import star2 from './star 3.svg'
import ellipses from './ellipses.svg'
import { useState } from 'react'
import './App.css'
import Section1 from './component/section1/Section1'
import Section2 from './component/section2/Section2'
import Section3 from './component/section3/Section3'
import Section4 from './component/section4/Section4'
import Section5 from './component/section5/Section5'
import Section6 from './component/section6/Section6'
import Footer from './component/footer/Footer'

function App() {
  const [modestate, setModestate] = useState("Light");
  const [value, setValue] = useState("Dark");
  const cm = () => {
    if (modestate === "Light") {
      setModestate("Dark")
      setValue("Light")
    }
    else {
      setModestate("Light")
      setValue("Dark")
    }
  }

  return (<>
    <div className="App" data-theme={modestate}>
      <div className="parent">
        <Header pros='Dark' />
        <div className="he2"><button onClick={cm} >{value} mode</button></div>
      </div>
      <div className="s2"><img src={star2}></img></div>
      <div className="eimg"><img src={ellipses}></img></div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  </>
  );
}

export default App;
