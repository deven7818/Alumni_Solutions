import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from '../src/Navbar/NavbarDemo';
import Home from './Home';

import About from '../src/About/about';
import Footer from '../src/Footer/footer';
import IconF from '../src/SocialIcon/icon';
import Service from '../src/Services/service';
import Contact from '../src/Contact.component/Contact.component';
import ServiceDetails from '../src/ServiceDetails/ServiceDetails';
import AboutDetails from '../src/AboutDetails/AboutDetails';
import Projects from '../src/Projects/projects';

import ReactCard from '../src/ReactCards/ReactCards';
import Abt from './Try/abt';


function App() {
  return (
    <Router>
      <div className=" App">
      
       <Nav/>

        
        <Switch>
            <Route exact path="/" ><Home /></Route> 
            <Route exact path="/abt" ><Abt /></Route> 
            <Route exact path="/iconf"><IconF /></Route> 
            <Route exact path="/about" ><About /></Route> 
            <Route exact path="/service"><Service /></Route>
          
            <Route exact path="/contact" ><Contact /></Route> 
            <Route exact path="/ServiceDetails"><ServiceDetails /></Route>
            <Route exact path="/AboutDetails" ><AboutDetails /></Route>
            <Route exact path="/projects"><Projects /></Route>
          
            <Route exact path="/reactCard" ><ReactCard /></Route>
          
          
        </Switch>
        <Footer/>




      </div>
    </Router>
  );
}

export default App;
