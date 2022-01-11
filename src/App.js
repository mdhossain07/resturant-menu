import './App.css';
import { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

function App() {

  const newCategories = ['All',...new Set(items.map(item => item.category))];

  const [menu, setMenu] = useState(items);
  const [categories, setCategoris] = useState([]);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };
  
  return (
    <main>
      <h2 className='main-title'> Our Menu </h2>
      <div className='underline'></div>
      <Categories newCategories = {newCategories} filterItems = {filterItems}/>
      <Menu items = {menu}/>
    </main>
  );
}

export default App;
