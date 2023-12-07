import React from 'react';
import Assurance from "./Assurance";
import Client from "./Client";
import Mianimage from "./Mianimage";
import Slider from './Slider';

const Home = () => {
  return (
    <>
        <Mianimage />
        <Client />
        <Slider />
        <Assurance />
    </>
  )
}

export default Home