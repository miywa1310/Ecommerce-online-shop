import React from 'react'
import HomeMain from '../components/Page-comp/HomeMain'
import BrowseCategory from '../components/Page-comp/BrowseCategory'
import NewArrival from '../components/Page-comp/NewArrival'

const Home = () => {
  return (
    <div>
      <HomeMain/>
      <BrowseCategory/>
      <NewArrival/>
    </div>
  )
}

export default Home