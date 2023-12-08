import { Routes, Route } from 'react-router-dom';

import Header from './routes/header/header.component';
import Home from './routes/home/home.component';
import Footer from './routes/footer/footer.component';
import AboutUs from './routes/about-us/about-us.component';
import Contact from './routes/contact/contact.component';
import Services from './routes/services/services.component';
import Props from './routes/props/props.component';
// import UnderConstruction from './components/underConstruction/underConstruction.component';

const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<UnderConstruction />}> */}
        <Route path='/' element={<Header />} >
          <Route path='/' element={<Footer />} >
            <Route index element={<Home />} />
            <Route path='servicios' element={<Services />} />
            <Route path='nosotros' element={<AboutUs />} />
            <Route path='contacto' element={<Contact />} />
            <Route path='propiedades/*' element={<Props />} />
          </Route>
        </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;