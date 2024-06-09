import Header from './component/header/Header'
import Ellipse from './component/ellipses/Ellipse'
import Section1 from './component/section1/Section1'
import Section2 from './component/section2/Section2'
import Section3 from './component/section3/Section3'
import star2 from './star 3.svg'
import './App.css'
import Footer from './component/footer/Footer'
function App() {
  return (<>
  
    <div className="parent">
      <Header/>
    </div>

    <div className="s2">
       <img src={star2}></img>
    </div>
    <Ellipse></Ellipse>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer></Footer>
    </>
  );
}

export default App;
