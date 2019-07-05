import React, { Component } from 'react'
import {
  Form,
  Label,
  Input,
  Segment
} from 'semantic-ui-react'

class Activity extends Component {
  constructor(props) {
    super()
    this.state = {
      userInput: '',
      sentences: ['the cow jumped over the moon', 'the cat in the hat', 'innovators don\'t fit into molds'],
      error: false,
      error_message: '',
      current: 0,
      completed: false
    }
  }

  handleOnChange = (event) => {
    const { sentences, current } = this.state
    const userInput = event.target.value
    const error = sentences[current].indexOf(userInput) !== 0
    const completeSentence = sentences[current] === userInput

    this.setState({userInput})

    if(completeSentence) {
      const completed = current === sentences.length - 1
      this.setState({
        current: completed ? current : current + 1,
        completed,
        userInput: '',
        error: false
      })
    }

    this.setState({
      error,
      error_message: 'Please try again!'
    })
  }

  render() {
    const { sentences, current, userInput, error, completed, error_message } = this.state
    return(
      <Segment vertical padded>
      {!completed ?
        <>
          <div>
            {
              !error ?
              <>
              <span style={{ backgroundColor: 'yellow' }}>{userInput}</span>
              {sentences[current].substring(userInput.length)}
              </>
              :
              sentences[current]
            }
          </div>

          {!!error ?
            <>
            <Form>
              <Form.Field inline>
                <Input error value={this.state.userInput} onChange={this.handleOnChange} placeholder='Search...' />
                <Label basic color='red' pointing='left'>
                  {error_message}
                </Label>
              </Form.Field>
            </Form>
            </>
            :
            <Input value={this.state.userInput} onChange={this.handleOnChange} placeholder='Search...' />
          }
        </>
        :
        <div>Congrats! You've completed your first activity!</div>
      }
      </Segment>
    )
  }
}

export default Activity
