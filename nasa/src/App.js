import React, { Component } from 'react'
import Date from './Components/Date.js'
import Pics from './Components/Pics.js'
import './App.css'


class App extends Component {
  state = {
    date: '',
    photo: ''
  }
  changeDate = e => {
    e.preventDefault()
    let dateFromInput = e.target[0].value
    this.setState({ date: dateFromInput })
    this.getSnapshotBeforeUpdate(dateFromInput)
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=7qehGfBhlRKCZEkiDsq5tK16PrhhjiPagaIU5mDS`)
    .then(response => response.json())
    .then(photoData => this.setState({ photo: photoData }))
  }

  render() {
    return (
      <div>
        <h1>🛰🚀🌙</h1>
        <Date changeDate={this.changeDate} />
        <Pics pics={this.state.photo} />
      </div>
    )
  }
}
 


export default App;

