import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './card.css'

const Card = ({ name, description, btnText, ...rest }) => {
  const [state, setState] = useState({ name, description, btnText })

  const setName = () => {
    if (state.name === 'New Component Name') {
      setState({ ...state, name })
    } else {
      setState({ ...state, name: 'New Component Name' })
    }
  }

  return (
    <div className="card">
      <h1>{state.name}</h1>
      <p>{state.description}</p>
      <button onClick={setName}>{btnText}</button>
    </div>
  )
}

// class Card extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: this.props.name,
//     }
//     this.setName = this.setName.bind(this)
//   }

//   setName() {
//     this.setState((prevState) => ({
//       name: prevState.name === 'New Component Name' ? this.props.name : 'New Component Name'
//     }))
//   }

//   render () {
//     console.log(this.state)
//     const { description, btnText } = this.props
//     return (
//       <div className="card">
//         <h1>{this.state.name}</h1>
//         <p>{description}</p>
//         <button onClick={this.setName}>{btnText}</button>
//       </div>
//     )
//   }
// }

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  btnText: PropTypes.string
}

export default Card
