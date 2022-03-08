import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchField: ''
//     };
//   }

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots({ robots: users }))
      .catch((err) => {
        console.log(err);
      });
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h2 className='f2 light-red'>loading...</h2>
  ) : (
    <div className='tc'>
      <h2 className='f2 dark-blue ttu'>RoboFriends</h2>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
