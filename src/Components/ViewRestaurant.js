//content is given using rfce
//url ninnu id edukkunnu , ie each card click time lulla path il varrunna id
import { useParams } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { base_url } from '../base_url';
import axios from 'axios';
import { Col, Row, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

//import RestOp here


function ViewRestaurant() {
  //to fetch data to a variable create a state
  //useState({}) -> console lil vanna data object aan so {} useState() parannu kodukka
  //data passed to ->setRestDetails
  //we consoling ->RestDetails
  const [RestDetails, setRestDetails] = useState({})





  //destruturing  -> instead of pathParams {id} ne direct eduthu -> destruction 
  //destructuring - use id insted of pathParams , to get id maaatram
  //const pathParams = useParams()
  // console.log(pathParams);//{id:'3'}

  const { id } = useParams()
  console.log(id);// 3

  //api call for fetch particular restaurant details
  //function definition
  const fetchData = async () => {
    //const response= await axios.get(`${base_url}/restaurants/${id}`);
    //console.log(response);
    //destructuring to get data only
    const { data } = await axios.get(`${base_url}/restaurants/${id}`);
    //console.log(data);//it not set to a variable
    setRestDetails(data);

  }
  console.log(RestDetails);

  //function call chayyunnu useEffect use chaydittu
  useEffect(() => {
    fetchData()
  }, [])//empty array kodukka allenggill continous aayittu varum []  



  return (
    <div>
      {
        RestDetails?
        <Row>
        <Col sm={12} md={3}>
          <Image className='border rounded p-2 m-2' src={`${RestDetails?.photograph}`} fluid />
        </Col>
        <Col md={8}>
          <ListGroup>
          <h2>{RestDetails?.name}</h2>
          <h5>{RestDetails?.neighborhood}</h5>
          <ListGroup.Item>Cuisine :{RestDetails?.cuisine_type}</ListGroup.Item>
          {/* evide destruturing applied */}
          <ListGroup.Item><RestOp op={RestDetails?.operating_hours}/></ListGroup.Item>
          <ListGroup.Item><RestReview review={RestDetails?.reviews}/></ListGroup.Item>
        </ListGroup>




      </Col >
    </Row>:''
      }
      

    </div>
  )
}

export default ViewRestaurant