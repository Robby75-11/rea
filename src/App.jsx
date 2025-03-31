import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div>
        <ButtonComponent Hello="Start" />
      </div>
      <div>
        <ImageComponent src="placebear.com/400x200" alt="orso"></ImageComponent>
        alt="Placeholder Image"
      </div>
    </>
  );
}

export default App;
