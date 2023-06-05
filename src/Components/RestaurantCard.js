import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
//import link tag
//parent til ninnum data child restaurant cardileek pass chayyunnu
function RestaurantCard({restaurants}) {
    console.log(restaurants);
  return (//RestaurantCard pagil vanna evideeyaan data display chayyendadda 
  //for that go to react-bootstrap ->components ->card-> <card></card> tag inside contents copy paste it here
//that time il thanne react bootstrap card evide import chayyaanm
  //<Card style={{ width: '18rem'}} > , etra width  veennda
//remove scrollbar in bottom
//normally <a> tag nde href instead we use in react 'to' attribute

    <div>
      <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none',color:'white'}}>
        <Card className='m-2'>
        <Card.Img variant="top" src={restaurants.photograph}/>
     
      <Card.Body>
        <Card.Title>{restaurants.name}</Card.Title>
        <Card.Text>
         {restaurants.neighborhood}
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Link>
      
  </div>
  )
}

export default RestaurantCard