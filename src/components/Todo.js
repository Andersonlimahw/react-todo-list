import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    title="click to toggle todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      backgroundColor: completed ? '#dadada': '#fff'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
