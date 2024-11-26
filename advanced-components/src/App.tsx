import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Input label="Name" id="name" />
      <Input label="Email" id="email" />

      <p>
        <Button element="button">A Button</Button>
      </p>

      
      <p>
        <Button element="anchor">A Link</Button>
      </p>
    </main>
  );
}

export default App;
