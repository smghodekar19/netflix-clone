import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row title= 'Netflix Originals'  isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>;
      <Row title= 'Trending Now' fetchUrl= {requests.fetchTrending}/>;
    </div>
  );
}

export default App;
