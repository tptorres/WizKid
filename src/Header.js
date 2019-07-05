import React from 'react'
import header_background from './header_background.jpg';
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react';

const HeaderContainer = () => {
  return(
    <Segment style={{ backgroundImage: `url(${header_background})`  }} vertical padded>
      <Grid centered padded>
        <Grid.Row>
          <Header as='h1'>
          You can learn anything!
          <Header.Subheader>For Free. For Everyone. In the Classroom.</Header.Subheader>
          </Header>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}>
            <Button style={{ background: '#0066FF', color: 'white' }} content='Learners start here' fluid/>
            <Button content='Teachers, start here' fluid basic/>
            <Button content='Parents, start here' fluid basic/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default HeaderContainer
