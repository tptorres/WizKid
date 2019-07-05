import React from 'react'
import {
  Menu,
  Segment
} from 'semantic-ui-react'

const Grades = () => {
  return(
    <Segment vertical secondary>
      <Menu text fluid widths={6}>
        <Menu.Item name='Kindergarten'  />
        <Menu.Item name='1st Grade' />
        <Menu.Item name='2nd Grade' />
        <Menu.Item name='3rd Grade' />
        <Menu.Item name='4th Grade' />
        <Menu.Item name='5th Grade' />
      </Menu>
    </Segment>
  )
}

export default Grades
