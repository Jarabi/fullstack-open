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
        },
      ]
    }

    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Footer parts={course.parts} />
      </div>
    )
}

const Header = (props) => {
    return <p>{props.course}</p>;
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[1]} />
    </>
  )
}

const Part = (props) => {
  const { name, exercises } = props.part
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Footer = (props) => {
    const totalExercises = props.parts.reduce(
        (total, part) => total + part.exercises,
        0
    );

    return <p>Number of exercises {totalExercises}</p>;
}

export default App
