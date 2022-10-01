import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/card-list/CardList'
import Search from './components/search/Search';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterMonsters, setFilterMonsters] = useState(data);
  
  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const res = await response.json();
    setData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = data.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [data, search]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearch(searchFieldString);
  };

  
  return (
    <div className="App">
      <h1 className='title'>Monsters</h1>
      <Search
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filterMonsters} />
    </div>
  )
}

export default App
