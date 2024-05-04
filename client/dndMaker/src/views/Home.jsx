import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TopBar from '../components/TopBar'

const Home = () => {

    const user = useSelector((state) => state?.user)
    console.log(user)

  return (
    <div>
      <TopBar />
    </div>
  )
}

export default Home
