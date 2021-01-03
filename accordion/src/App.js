import data from "./data";
import Question from "./Question"

function App() {
  return (
    <main>
      <section className="col-1">
        <h1>Questions And Answers About Login</h1>
      </section>
      <section className="col-2">
        {data.map((item)=> <Question  key={item.id} title={item.title} info={item.info}/>)}
      </section>
    </main>
  );
}

export default App;
