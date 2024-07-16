import Listing from './components/Listing';
import data from './data/data.json';
import '../src/index.css';

function App() {

  const arr = data.filter(item => item.state === 'active'); 

  return (
      <Listing items={arr}/>
  )
}

export default App
