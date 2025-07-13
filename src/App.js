import './App.css';
import Main from './travelJournal/Main';
import Header from './travelJournal/Header';
import travelData from './travelJournal/travelData'
import Footer from './travelJournal/Footer';

function App() {
  const travelElements = travelData.map((travel) => {
    return  <Main img={travel.img} countryName={travel.countryName} link={travel.link} placeName={travel.placeName} date={travel.date} info={travel.info}/>
    })
  return (
    <div className="App">
      <Header/>
      <main>
        {travelElements}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
