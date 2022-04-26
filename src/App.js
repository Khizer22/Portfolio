import './App.css';
import Container from 'react-bootstrap/Container';
import SideBar from './components/sideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/sideBar/mainPage/MainPage';
import NoticeCard from './components/sideBar/cards/NoticeCard';
import CardList from './components/sideBar/cards/CardList';
import Footer from './components/sideBar/mainPage/Footer';

function App() {
  return (
    <div className="App">

      {/* <Button>HELLO</Button> */}
      <SideBar/>
      <Container>
        <MainPage/>
        <NoticeCard/>
        <CardList/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
