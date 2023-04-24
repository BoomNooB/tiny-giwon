import React from 'react'
import { useState } from 'react';
import './style/ActivityCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Col, Row ,Button }  from 'react-bootstrap'

const ActivityCard = () => {

  const [activityEmptyCheck, setActivityEmptyCheck] = useState(true);

  const ActivityCardEmpty = () => { 
    return (
      <Card className='idol-card'>
      <Card.Body className='cardbody'>
        <Card.Title>Start Your First Activity!</Card.Title>
        <Card.Text>
          <FontAwesomeIcon className="editIcon" icon="fa-plus" />
        </Card.Text>
      </Card.Body>
    </Card>
    )
  
  }

  return (
    <div>

      <div class='d-flex justify-content-end m-3'>
        <Button variant="success" >
          Add Activity
        </Button>
      </div>
      
      <div className='idol-card-container '>
            <ActivityCardEmpty  />

            <Card className='idol-card'>

            
              <Card.Img variant="top" src="./src/images/ACT-IMG-1.png" class='img-fluid' />
              <Card.Body >
              <div class='d-flex justify-content-end flex-row gap-2'>
                <Button variant="secondary">
                  <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon="fa-trash" />
                </Button>
              </div>
                <Card.Title style={{fontWeight: 'bold'}}>วิ่งแบบพี่ตูน</Card.Title>
                <Card.Text>
                  เหนื่อย ไม่อยากวิ่งแบบพี่ตูนแล้ว อยากวิ่งแบบเจนนี่
                </Card.Text>
                <Card.Text>
                  dd/mm/yy hh:mm:ss
                </Card.Text>

              </Card.Body>
            </Card>
            <Card className='idol-card'>
              <Card.Img variant="top" src="./src/images/ACT-IMG-2.png" class='img-fluid'/>
              <Card.Body >
              <div class='d-flex justify-content-end flex-row gap-2'>
                <Button variant="secondary">
                  <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon="fa-trash" />
                </Button>
              </div>

                <Card.Title style={{fontWeight: 'bold'}}>วิ่งแบบพี่ตูน</Card.Title>
                <Card.Text>
                  เหนื่อย ไม่อยากวิ่งแบบพี่ตูนแล้ว อยากวิ่งแบบเจนนี่
                </Card.Text>
                <Card.Text>
                  dd/mm/yy hh:mm:ss
                </Card.Text>


              </Card.Body>
            </Card>
            <Card className='idol-card'>
              <Card.Img variant="top" src="./src/images/ACT-IMG-3.png" class='img-fluid'/>
              <Card.Body >
              <div class='d-flex justify-content-end flex-row gap-2'>
                <Button variant="secondary">
                  <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon="fa-trash" />
                </Button>
              </div>
                <Card.Title style={{fontWeight: 'bold'}}>วิ่งแบบพี่ตูน</Card.Title>

                <Card.Text>
                  เหนื่อย ไม่อยากวิ่งแบบพี่ตูนแล้ว อยากวิ่งแบบเจนนี่
                </Card.Text>
                <Card.Text>
                  dd/mm/yy hh:mm:ss
                </Card.Text>

              </Card.Body>
            </Card>
      
      </div>
    </div>
        
      

  )
}

export default ActivityCard