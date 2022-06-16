import React from 'react';
import Header from './Component/Header';
import MovieSlider from './Component/MovieSlider';
import Recommandedmovies from './Component/Recommandedmovies';
import Footer from './Component/Footer';
const App =()=>
{
    return(
    <>
        <Header/>
        <MovieSlider/>
        <hr/>
        <Recommandedmovies/>
        <Footer/>
    </>)
}

export default App