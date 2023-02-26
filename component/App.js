import html from "../core.js";
import Header from "../component/Header.js";
import TodoList from "../component/TodoList.js";
import Footer from "../component/Footer.js";

function App() {
  return html`
    <section class="todoapp">
      ${Header()}
      <section class="main">${TodoList()} ${Footer()}</section>
    </section>
  `;
}

export default App;
