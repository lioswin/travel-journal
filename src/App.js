import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import data from './data.js'
function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
           item={item}
            
        />
    )
}) 


  return (
  <div>
    <Navbar/>
    {cards}
  </div>
  );
}

export default App;
