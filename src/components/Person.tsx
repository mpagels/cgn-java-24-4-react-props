export type PersonProps = {
    name: string,
    age: number,
    description: string,
    myFunc: () => void
}

export default function Person({name, age, description, myFunc}:PersonProps) {

    return <>
        <h2>{name}</h2>
        <p>{description}</p>
        <Age age={age}/>
        <button onClick={myFunc}>Say Hello</button>
    </>
}

type AgeProps = {
    age: number
}

function Age({age} : AgeProps) {
    return  <p>Age: {age}</p>
}