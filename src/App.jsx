import "./App.css";
import Navbar from "./components/navbar/Navbar";
import UserTabs from "./components/userTabs/UserTabs";


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section>
        <article>
          <UserTabs />
        </article>
      </section>
    </>
  );
}

export default App;
