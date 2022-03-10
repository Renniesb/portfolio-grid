import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';




function PortfolioCard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data=>{
      console.log(data)

      setData(data)
    })
    .catch(err=>{
      setError(err)
    })
  },[])


  return <>{data ? <Card> <CardMedia component="img" height="278" image={data.message}/> </Card> : <h5>loading</h5>}</>
}

export default PortfolioCard;
