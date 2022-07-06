import React, { useEffect } from 'react';

import Portfolio from './Portfolio';

import './global.css';

export default function App() {
  useEffect(()=>{document.title = 'Oleh Volkolupov portfolio'},[]);
  return (
    <>
      <Portfolio />
    </>
  )
}
