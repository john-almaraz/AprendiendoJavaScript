import './App.css';
import Card from './components/Card.js'

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Wikipedia-Bodybuilder</h1>
        <Card 
          nombre='Jeremy Buendia'
          pais='USA'
          profesion='Bodybuilder'
          descripcion='Campeon x4 veces del Mr. Olympia en la categoria Mens physique'
          imagen='buendia'
        />
        <Card
          nombre='Ramon Dino'
          pais='Brasil'
          profesion='Bodybuilder'
          descripcion='Campeon x1 veces del Arnold Classic en la categoria Classic physique y proximo campeon del Mr. Olympia 2024'
          imagen='dino'
        />
        <Card
          nombre='Jeff Seid'
          pais='USA'
          profesion='Model Fitness'
          descripcion='Influencer fitness Ahestetic tambien fue Bodybuilder hace muchos años. Actualmente ya no es tan popular'
          imagen='seid'
        />
      </div>      
    </div>
  );
}

export default App;
