import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Segment
} from 'semantic-ui-react';

class Activities extends Component {
  constructor(props) {
    super();
    this.state = {}
  }

  render() {
    return(
      <Segment vertical padded>
        <Grid divided>
          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column><Link to='/activity/writing-activity'>Writing Activity 1</Link></Grid.Column>
            <Grid.Column>Writing Activity 2</Grid.Column>
            <Grid.Column>Writing Activity 3</Grid.Column>
            <Grid.Column>Writing Activity 4</Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column>Writing Activity 5</Grid.Column>
            <Grid.Column>Writing Activity 6</Grid.Column>
            <Grid.Column>Writing Activity 7</Grid.Column>
            <Grid.Column>Writing Activity 8</Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column>Writing Activity 9</Grid.Column>
            <Grid.Column>Writing Activity 10</Grid.Column>
            <Grid.Column>Writing Activity 11</Grid.Column>
            <Grid.Column>Writing Activity 12</Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column>Writing Activity 13</Grid.Column>
            <Grid.Column>Writing Activity 14</Grid.Column>
            <Grid.Column>Writing Activity 15</Grid.Column>
            <Grid.Column>Writing Activity 16</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Activities
