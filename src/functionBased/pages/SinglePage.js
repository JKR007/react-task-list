import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const data = [
    {
      slug: 'about-app',
      title: 'About App',
      description: 'Simple TaskList App with adding, editing, deleting, marking as completed functionalities. It is used local storage of browser to save the tasks. In order to edit task, need to double-click on it and push enter to re-submit.'
    },
    {
      slug: 'about-dev',
      title: 'About Dev',
      description: 'Hi 👋, I am Abdu! I am a RoR dev. This app was developed by reading articles for learning purposes.'
    }
  ]
  const { slug } = useParams()
  const pageContent = data.find(content => content.slug === slug)
  const { title, description } = pageContent

  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default SinglePage;