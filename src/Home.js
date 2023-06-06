
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Carousel from './Components/Carousel';
import BoonsComponent from './Components/BoonsComponent';
import PurchaseGallery from './Components/PurchaseGallery';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function Home() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className='container'>
          <a name='main'>
            <div className='main'>
              <Carousel />
              <BoonsComponent />
              <PurchaseGallery />
              <Newsletter />
            </div>
          </a>
          <Footer />
        </div>
      </div>
      
    );
  }
  
  export default Home;