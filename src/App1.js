import "./App.css";
import Message from "./components/Message";
function App() {
  // let lang = "React Js";
  // let lab = "MCA Lab 1";
  // let info = ["React Js", "MCA Lab 1"];
  let info = [
    {
      lang: "React Js",
      lab: "MCA Lab 1",
    },
    {
      lang: "Dot Net",
      lab: "MCA Lab 2",
    },
    {
      lang: "C and Java",
      lab: "G Block G-113",
    },
    {
      lang: "Next.js",
      lab: "MCA Lab 3",
    },
  ];
  return (
    <div className="App">
      {/* <Message info={info[0]} />
      <Message info={info[1]} />
      <Message info={info[2]} /> */}
      {info.map((item) => (
        <Message info={item} />
      ))}
    </div>
  );
}

export default App;
