import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import Footer from './Footer'

function App() {
  return (
    <>
      <h1 className="heading">Family Wellness</h1>
      <p>MASSAGE THEAROPY</p>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
