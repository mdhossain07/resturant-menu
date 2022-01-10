import './App.css';
import { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

function App() {

  const newCategories = ['all',...new Set(items.map(item => item.category))];
  console.log(newCategories);

  const [menu, setMenu] = useState(items);
  const [categories, setCategoris] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };
  
  return (
    <main>
      <h2 className='main-title'> Our Menu </h2>
      <Categories newCategories = {newCategories} filterItems = {filterItems}/>
      <Menu items = {menu}/>
    </main>
  );
}

export default App;
