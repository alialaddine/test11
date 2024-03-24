import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageTextBlock from './components/ImageTextBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="campaig-page">
      <div className='campain-page-wrap'>
        <div className='campaign-page-cont'>

          <Header/>

          <div className='page-body'>
            <ImageTextBlock title="elio" description="lorem ipsum" direction="left" image={logo}/>
            <ImageTextBlock title="elio" description="lorem ipsum" direction="right" image={logo}/>
          </div>

          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default App;
