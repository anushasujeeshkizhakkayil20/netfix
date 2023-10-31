
import './App.css';
import Banners11 from './components/Banners11';
import Nav from './components/Nav';
import Rows from './components/Rows';
import requests from './requests';




function App() {
  return (
    <div >
      <Nav/>

    <Banners11 fetchUrl={requests.fetchNetflixOriginals}/>
      
     <Rows isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Rows title="Trendig movie" fetchUrl={requests.fetchTrending}/>
     <Rows title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
     <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    










    </div>
  );
}

export default App;
