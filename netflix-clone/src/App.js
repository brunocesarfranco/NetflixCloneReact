import './App.css';
import Row from './components/Row';
import categories from './api';
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Destaque */}
<<<<<<< Updated upstream
      {/* Em Alta */}
      {categories.map((category, index) => {
        return <Row 
        key={category.name} 
        title={category.title} 
        path={category.path}
        />;
=======
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name} 
            title={category.title} 
            path={category.path}
            isLarge={category.isLarge}
        />
        );
>>>>>>> Stashed changes
      })}
    </div>
  );
}


export default App;
