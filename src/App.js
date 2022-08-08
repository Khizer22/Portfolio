import './App.css';
import Container from 'react-bootstrap/Container';
// import Header from './components/sideBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import SideBar from './components/sideBar/Sidebar';
import HomePage from './components/pages/homePage/homePage';
import { Component } from 'react';
import FaceLife from './components/pages/faceLife/FaceLife';
import PortfolioSite from './components/pages/porfolioSite/PortfolioSite';
import Ascendance from './components/pages/ascendance/Ascendance';
import MainPage from './components/pages/mainPage/MainPage';
import AboutMe from './components/pages/about_me/about_me';

const initialState = {
  route: 'main'
}

const tempDisabledPages = ['portfolioSite']

class App extends Component {

  constructor(props){
    super(props);
    this.state= initialState;

    document.title = `Khizer Mahboob - Programmer`;
  }

  onRouteChange = (route) => {
    // if (route === 'home'){
    //   this.setState(initialState);
    // } 
    // else if (route === 'facelife'){
    //   this.setState({isSignedIn : true})
    // }

    this.setState({route: route});
  }

  getBody(){
    const {route} = this.state;

    switch (route) {
      case 'main':
        return <AboutMe/>;
        break;
      case 'aboutMe':
        return <AboutMe/>;
        break;
      case 'portfolioSite':
        return <PortfolioSite/>;
        break;
      case 'faceLife':
        return <FaceLife/>;
        break;
      case 'ascendance':
        return <Ascendance/>;
        break;
      case 'zedFighter':
        return <HomePage/>;
        break;
      case 'projects':
          return <HomePage/>;
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

        {tempDisabledPages.includes(this.state.route) ? 
          <div className='coming-soon1'>
            <h1>PAGE COMING SOON</h1>
          </div>
          : 
          <div></div>
        }

        <div id='mainBody'>
          <Container id='contain'>

            {this.getBody()}
            
          </Container>
        </div>
        
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
