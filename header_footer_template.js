class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <h1>Welcome to the Asynchronous JavaScript and Fetch API Tutorial</h1>
    <nav>
        <ul>
            <li>
                <a href="page1.html">Introduction to Asynchronous JavaScript</a>
            </li>
            <li>
                <a href="page2.html">Understanding Promises and Async/Await</a>
            </li>
            <li>
                <a href="page3.html">Introduction to the Fetch API</a>
            </li>
            <li>
                <a href="page4.html">Advanced Fetch API Usage</a>
            </li>
        </ul>
    </nav>
</header>
        `
  }
}

//Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `
      <footer>
        <p>Created by Minh and Douglas</p>
      </footer>
      `
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);