import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { type FormHandles } from "./components/Form";

function App() {

  const customRef = useRef<FormHandles>(null);

  function handleSave(value: unknown) {
    const extractedData = value as {age: string, name: string};
    console.log(extractedData.age);
    console.log(extractedData.name);
    customRef.current?.clear();
  }
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>

      <Form onSave={handleSave} ref={customRef}>
      <Input type="number" label="Age" id="age" ref={input}/>
      <Input type="text" label="Name" id="name"/>

      
      <p>
        <Button >Save</Button>
      </p>

      </Form>

      {/* <Container as={Button}>Click me</Container> */}
    </main>
  );
}

export default App;
