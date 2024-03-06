import React from 'react'
import Func from './First';
import Props2 from './Parent';
import State from './State';

const Cars = ()=> {
    return (
        "this is another p"
    );
}

const Functioncomponent = () => {
  return (
    <>   
     "this is a para."
    <Cars/>
    <NewComponent/>
    <Func/>
    <Props2/>
    <State/>
    </>
  );
}
const NewComponent =() => {
  return (
    <h1>This is a heading..</h1>
  )
}


export default Functioncomponent;