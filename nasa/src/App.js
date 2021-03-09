import React, { Component } from 'react'
import Date from './Components/Date.js'
import Pics from './Components/Pics.js'
import './App.css'


class App extends Component {
  state = {
    date: '',
    pics: ''
  }
  changeDate = e => {
    e.preventDefault()
    let dateFromInput = e.target[0].value
    this.setState({ date: dateFromInput })
    this.getPics(dateFromInput)
    console.log(this.state)
  }

  getPics = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=7qehGfBhlRKCZEkiDsq5tK16PrhhjiPagaIU5mDS`)
    .then(response => response.json())
    .then(picsData => this.setState({ pics: picsData }))
  }


  render() {
    return (
      <div>
        <h1>🌖🌗🌘🌑🌒🌓🌔</h1>
        <Date changeDate={this.changeDate} />
        <Pics pics={this.state.pics} />
      </div>
    )
  }
}
 


export default App;

