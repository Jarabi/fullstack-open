const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </>
    );
};

const TotalExercises = ({ parts }) => {
    const totalExercises = parts.reduce((sum, curr) => sum + curr.exercises, 0);
    return <strong>total of {totalExercises} exercises</strong>;
};

const Course = ({ course }) => {
    const { name, parts } = course;

    return (
        <>
            <Header name={name} />
            <Content parts={parts} />
            <TotalExercises parts={parts} />
        </>
    );
};

export default Course