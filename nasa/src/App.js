import React, { Component } from 'react'
import DateInput from './apod/'
import './App.css';


function App() {
  const [galaxy, setPictures] = useState([])
  const [search, setSearch] = useState('')
  
 
useEffect(() => {
  axios 
  .get (
    'https://api.nasa.gov/planetary/apod?concept_tags=True&7qehGfBhlRKCZEkiDsq5tK16PrhhjiPagaIU5mDS'
  )
  .then(res => {
    setPictures(res.data)
    console.log(res.data)
  })
  .catch(error => console.log(error))
}, [])

}

export default App;

