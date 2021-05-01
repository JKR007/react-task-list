import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa'

const InputTask = (props) => {
  const [inputText, setInputText] = useState({
    title: ''
  })

  const onChange = (e) => {
    setInputText(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTask(inputText.title);
      setInputText({
        title: ''
      });
    } else {
      alert('Please, add item!');
    }
  }

  return (
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" placeholder="Add task list..." className="input-text" name="title" value={inputText.title} onChange={onChange}/>
        <button className="input-submit">
          <FaPlusSquare color="darkgray" size="25px" className="submit-icon" />
        </button>
      </form>
  )
}

export default InputTask;