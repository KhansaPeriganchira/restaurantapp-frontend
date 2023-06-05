import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard'
import { base_url } from '../../base_url'


//react-bootstrapil ninnan Row,Col import chaydu evide use chayyunnad
// <AllRestaurants/> App.js il header tag inside koduthaal AllRestaurant.js file contents varum

function AllRestaurants() {
  //to take response.data to a variable create state , in react variable declaration state creation aan
  //state forr holding all restaurant arrays
//allItems sileek response.data  ye kodukkum with help of setAllItems
//state til direct aayittu kodukaan pattilla setAllItem kodukkaan pattu
  const [allItems,setAllItems]=useState([])

  //http://localhost:3001/restaurants(json data url)

  // const base_url='http://localhost:3001'
  //code for api calls , data fetch using asynchronous function , using axios npm library

  const fetchData=async()=>{
   const response= await axios.get(`${base_url}/restaurants`)
   //console.log(response.data);//response.data koduthaal 10 array maatram varum
   //console.allItems
setAllItems(response.data)

  }
  console.log(allItems);//array(10)


  useEffect(()=>{

fetchData()//function call kodukka always in useEffect

  },[])//empty array kodukkanam otherwise   it will not stop  calling

  return (
//AllRestaurants instead array(10) data ye display chayyikanam , to get responsive kittan use Row , Col
//to display data in a row use <Row> </Row> tag in react in {} kodukkunnu bez js content aan html kodukkunne
 //item.name -> is given bezz in array restaurant name contained in name , "name": "Mission Chinese Food",          
 // to display card here paste  <RestaurantCard/> instead of <h1>{item.name}</h1>
 //item-> thillulla array ne rest card via rest card component leek pass chayyunnu using destruturing parent to child data passing
 //here data is passed through selector <RestaurantCard/> parameter aayittu to child component RestaurantCard.js leek
 <div>
      
        <Row>
          {
                allItems.map(item=>(

                 <Col sm={12} md={6} lg={4} xl={3}>
                 {/* <h1>{item.name}</h1>
                  */}
                  <RestaurantCard restaurants={item}/>
                 </Col>
                ))
          }

         </Row>

    </div>
  )
}

export default AllRestaurants