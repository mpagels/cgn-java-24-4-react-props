import Person from "./components/Person.tsx";
import persons, {PersonType} from "./assets/data.ts";

function App() {
    function sayHello() {
        console.log("Hello World")
    }

    function sayBye() {
        console.log("Bye")
    }

  return (
    <>
        {persons.map((currywurst:PersonType) => <Person key={currywurst.name} name={currywurst.name} age={currywurst.age} description={currywurst.description} myFunc={() => console.log("hello World")} />)}
        <button onClick={sayHello}>Say Hello</button>
        <button onClick={sayBye}>Say Bye</button>
    </>
  )
}

export default App