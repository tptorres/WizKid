import React from 'react'
import HeaderContainer from './Header';
import Grades from './grades';
import Activities from './activities';

const Home = () => {
  return(
    <>
     <HeaderContainer />
     <Grades/>
     <Activities />
    </>
  )
}

export default Home
