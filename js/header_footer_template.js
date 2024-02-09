class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <h1>What the heck is Asynchronous Programming - Javascript Edition</h1>
      <nav>
        <ul>
          <li>
              <a href="index.html">Asynchronous JavaScript</a>
          </li>
          <li>
              <a href="page2.html">Promises and Async/Await</a>
          </li>
          <li>
              <a href="page3.html">API and HTTP Requests</a>
          </li>
          <li>
              <a href="page4.html">Fetch API</a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

//Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>Created by Nguyen Minh Hanh and Douglas Delpha</p>
      </footer>
      `;
  }
}

class Head extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/prism.css" />  
    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
customElements.define("head-css", Head);
