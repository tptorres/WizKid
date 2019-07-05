import React from 'react'
import {
  Grid,
  Segment
 } from 'semantic-ui-react';

const Footer = () => {
  return(

<Segment vertical padded style={{backgroundColor: '#0066FF', height: '300px'}}>
  <Grid columns={3}>
    <Grid.Column width={6}>
      <p style={{margin: '50px', padding: '25px', fontSize: '18px', color: 'white'}}>Giving opportunities to students to reach their fullest learning
      potential.</p>
    </Grid.Column>

    <Grid.Column width={3}>
    <p style={{textAlign: 'right', fontWeight: 'Bold', color: 'white'}}>About Us</p>
    <p style={{textAlign: 'right', color: 'white'}}>Students</p>
    <p style={{textAlign: 'right', color: 'white'}}>Parents</p>
    <p style={{textAlign: 'right', color: 'white'}}>Teachers</p>
    </Grid.Column>

    <Grid.Column width={3}>
    <p style={{textAlign: 'right', fontWeight: 'Bold', color: 'white'}}>Grades</p>
    <p style={{textAlign: 'right', color: 'white'}}>Kindergarden</p>
    <p style={{textAlign: 'right', color: 'white'}}>1st Grade</p>
    <p style={{textAlign: 'right', color: 'white'}}>2nd Grade</p>
    <p style={{textAlign: 'right', color: 'white'}}>3rd Grade</p>
    <p style={{textAlign: 'right', color: 'white'}}>4th Grade</p>
    <p style={{textAlign: 'right', color: 'white'}}>5th Grade</p>
    </Grid.Column>
  </Grid>
</Segment>
)
}

export default Footer
