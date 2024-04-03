import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import "./App.css";

function App() {
  return (
    <section className="">
      <ExpenseItem title="Titulo generico" date={new Date(2023, 7, 23)} amount={9.43}>
        <p>soy Emiliano en medio del texto</p>
      </ExpenseItem>
    </section>
  );
}

export default App;
