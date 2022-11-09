import { PageCopa02 } from "./components/copaPage02";
import { PageCopa58 } from "./components/pageCopa58";
import { PageCopa62 } from "./components/pageCopa62";
import { PageCopa70 } from "./components/pageCopa70";
import { PageCopa94 } from "./components/pageCopa94";
import { PageInicial } from "./components/pageInicial";
import { SecondPage } from "./components/secondPage";


function App() {
  return (
    <div className="App">
      <PageInicial/>
      <SecondPage/>
      <PageCopa58/>
      <PageCopa62/>
      <PageCopa70/>
      <PageCopa94/>
      <PageCopa02/>
    </div>
  );
}

export default App;
