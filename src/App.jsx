import './App.css';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer.jsx';
import Formularios from './componentes/Formularios';
import Icons from './componentes/Icons';
import Main from './componentes/Main';
import Navbar from './componentes/Navbar';
import Nosotros from './componentes/Nosotros';
import Valores from './componentes/Valores';
import Whapp from './componentes/Whapp.jsx';


function App() {

  return (
    <div>
      <Navbar />
      <Main />
      <Formularios />
      <Nosotros />
      <Valores />
      <Contacto />
      <Icons />
      <Whapp />
      <Footer />
    </div>
  );
}

export default App;
