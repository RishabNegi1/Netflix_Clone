import React from 'react'
import Main from '../Component/Main';
import Row from '../Component/Row';
import requests from '../Request';

const Home = () => {
  return (
    <div>
        <Main/>
        <Row Id='1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row Id='2' title='TopRated' fetchURL={requests.requestTopRated}/>
        <Row Id='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row Id='4' title='Popular' fetchURL={requests.requestPopular}/>
        <Row Id='5' title='Netflix Originals' fetchURL={requests.requestNetflixOriginals}/>
        <Row Id='6' title='Action' fetchURL={requests.requestActionMovies}/>
        <Row Id='7' title='Romance' fetchURL={requests.requestRomanceMovies}/>
        <Row Id='8' title='Comedy' fetchURL={requests.requestComedyMovies}/>
        <Row Id='9' title='Documentaries' fetchURL={requests.requestDocumentaries}/>  
    </div>
  )
}

export default Home