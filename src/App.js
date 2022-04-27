import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/sideBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/sideBar/mainPage/MainPage';
import NoticeCard from './components/sideBar/cards/NoticeCard';
import CardList from './components/sideBar/cards/CardList';
import Footer from './components/sideBar/mainPage/Footer';
import SideBar from './components/sideBar/mainPage/Sidebar';
import HomePage from './components/sideBar/mainPage/homePage/homePage';
import { Component } from 'react';
import FaceLife from './components/sideBar/mainPage/Pages/FaceLife';
import ReplacementHeads from './components/sideBar/mainPage/Pages/ReplacementHeads';
import Ascendance from './components/sideBar/mainPage/Pages/Ascendance/Ascendance';

const initialState = {
  route: 'home'
}

class App extends Component {

  constructor(props){
    super(props);
    this.state= initialState;

    document.title = `Khizer Mahboob - Programmer`;
  }

  onRouteChange = (route) => {
    if (route === 'home'){
      this.setState(initialState);
    } 
    // else if (route === 'facelife'){
    //   this.setState({isSignedIn : true})
    // }

    this.setState({route: route});
  }

  getBody(){
    const {route} = this.state;

    switch (route) {
      case 'home':
        return <HomePage/>;
        break;
      case 'replacementHeads':
        return <ReplacementHeads/>;
        break;
      case 'faceLife':
        return <FaceLife/>;
        break;
      case 'ascendance':
        return <Ascendance/>;
        break;

      default:
        return <HomePage/>;
        break;
    }
  }

  render(){
    return (
      <div className="App">

        {/* <Header/> */}
        <SideBar onRouteChange={this.onRouteChange}/>

        <div id='mainBody'>
          <Container>

            {this.getBody()}
            
          </Container>
        </div>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
