import React, { Component } from 'react';
import './App.css';
import trips from './api/trips.json'

import Trip from './components/Trip.jsx';
import Switch from './components/Switch.jsx';

class App extends Component {

  state = {
    trips
  }

showDeparting() {
  let filterTrips = trips.filter((trip) => {
    return trip.type === 'departing'
  })

  this.setState({trips: filterTrips})
}

showArriving() {
  let filterTrips = trips.filter((trip) => {
    return trip.type === 'arrival'
  })

  this.setState({trips: filterTrips})
}

showDetained() {
  let filterTrips = trips.filter(trip => {
    return trip.status === "Рейс задержан"
  })

  this.setState({trips: filterTrips})
}

showAll() {
  let filterTrips = trips;

  this.setState({trips: filterTrips})
}

search(number) {
  if (number) {
    let filterTrips = trips.filter(trip => {
      return number === trip.number
    })
    this.setState({trips: filterTrips})
  } else {
    this.setState({trips})
  }
}

  render() {
    return (
      <div className="app">
        <Switch showDeparting={() => this.showDeparting()}
                showArriving={() => this.showArriving()}
                showDetained={() => this.showDetained()}
                showAll={() => this.showAll()}
                search={(number) => this.search(number)}></Switch>
        <div className='app__trips'>
          {this.state.trips.map(trip => {
            return(
            <Trip key={trip.number}
                  number={trip.number}
                  timeOfDeparture={trip.timeOfDeparture}
                  to={trip.to}
                  terminal={trip.terminal}
                  airline={trip.airline}
                  status={trip.status}></Trip>)
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
