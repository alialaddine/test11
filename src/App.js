import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageTextBlock from './components/ImageTextBlock';

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

          <footer className='page-footer'>
            sitemap
          </footer>

        </div>
      </div>
    </div>
  );
}

export default App;
