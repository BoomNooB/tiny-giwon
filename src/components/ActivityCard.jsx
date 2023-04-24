import React from 'react'
import { useState } from 'react';
import './style/test.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Col, Row }  from 'react-bootstrap'

const ActivityCard = () => {

  const [activityEmptyCheck, setActivityEmptyCheck] = useState(true);

  return (
    

    <div className='idol-card-container '>
          <Card className='idol-card'>
            <Card.Body className='testxxx'>
              <Card.Title>Or Create Your Own Goal here!</Card.Title>
              <Card.Text>
                <FontAwesomeIcon className="editIcon" icon="fa-plus" />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='idol-card'>
            <Card.Img variant="top" src="./src/images/bambam.png" class='img-fluid' />
            <Card.Body className='testxxx'>
              <Card.Title style={{fontWeight: 'bold'}}>BamBam GOT-7</Card.Title>
              <Card.Text>
                Weight: 52kg
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='idol-card'>
            <Card.Img variant="top" src="./src/images/jaehyun.png" class='img-fluid'/>
            <Card.Body className='testxxx'>
              <Card.Title style={{fontWeight: 'bold'}}>Jaehyun NCT</Card.Title>
              <Card.Text>
                Weight: 60kg
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='idol-card'>
            <Card.Img variant="top" src="./src/images/jennie.png" class='img-fluid'/>
            <Card.Body className='testxxx'>
              <Card.Title style={{fontWeight: 'bold'}}>Jennie Blackpink</Card.Title>
              <Card.Text>
                Weight: 50kg
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
        
      

  )
}

export default ActivityCard