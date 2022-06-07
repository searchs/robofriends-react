import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};

function App() {
  // const [robots, setRobots] = useState([]);
  // const [searchField, setSearchField] = useState('');

  const { robots } = this.state;
  const { searchField, onSearchChange } = this.props;

  useEffect((props) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const onSearchChange = (event) => {
  //   setSearchField(event.target.value);
  // };

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h2 className='f2 light-red'>loading...</h2>
  ) : (
    <div className='tc'>
      <h2 className='f2 dark-blue font-sans'>RoboFriends</h2>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
