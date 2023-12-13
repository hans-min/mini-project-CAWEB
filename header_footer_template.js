class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <h1>Welcome to the WaveFunctionCollapse Tutorial</h1>
    <nav>
        <ul>
            <li>
                <a href="page1.html">Introduction</a>
            </li>
            <li>
                <a href="page2.html">Environment Setup</a>
            </li>
            <li>
                <a href="page3.html">Functional Demo</a>
            </li>
            <li>
                <a href="page4.html">Integration</a>
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