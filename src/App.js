import React from 'react'

const Header = (props) => {
  return(
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
  <div>
    <Part part={props.part1} excercise={props.excercises1}/>
    <Part part={props.part2} excercise={props.excercises2}/>
    <Part part={props.part3} excercise={props.excercises3}/>
  </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App