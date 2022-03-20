const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 30px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 15px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
    <!--<ul class="social-row">
       <li><a href="about.html">About</a></li>
      <li><a href="studio.html">Studio</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul> -->
    <ul class="social-row">
      <li>Copyright &copy; 2022 </li>

      <li><a href="https://www.facebook.com/tlennon1" target="_blank">
            Facebook<i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/tlennon1" target="_blank">
            Twitter<i class="fab fa-twitter"></i></a></li>
      <li><a href="https://soundcloud.com/tlennon" target="_blank">
            Soundcloud<i class="fab fa-linkedin"></i></a></li>

    </ul>
  </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);