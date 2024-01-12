class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <h1>What the heck is Asynchronous Programming - Javascript Edition</h1>
    <nav>
        <ul>
            <li>
                <a href="page1.html">Asynchronous JavaScript</a>
            </li>
            <li>
                <a href="page2.html">Promises and Async/Await</a>
            </li>
            <li>
                <a href="page3.html">HTTP Requests and Fetch API</a>
            </li>
            <li>
                <a href="page4.html">Advanced Fetch API Usage</a>
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
        <p>Created by Minh and Douglas</p>
      </footer>
      `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
