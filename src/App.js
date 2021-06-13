import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


import Header from './component/header';
import SubHeader from './component/subheader';
import Poster from './component/poster';
import WholeSale from './component/wholesale';
import BigSelection from './component/bigselection';
import GradientPoster from './component/gradientPoster';
import ConstructionReal from './component/construction&Real';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
     <Header />
     <SubHeader />
     <Poster />
     <WholeSale />
     <BigSelection />
     <GradientPoster />
     <ConstructionReal />
     <Footer />
    </div>
  );
}

export default App;
