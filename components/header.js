const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: left;
      background-color:  #0a0a23;
    }

    ul {
      padding: 10;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }


    h1 {
        color: blue;
        text-align: center;
    }

    h4 {
        color: black;
        text-align: center;
    }

    div {
        top: 75%;
        height: 75px;
        padding: 25px;
        line-height: 15px;
        margin-top: -25px;
    }

.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 30px; /* Should be removed. Only for demonstration */

}

.row:after {
  content: "";
  display: table;
  clear: both;
}

#img-logo {
    width: 100px; 
    height: 80px; 
    margin-top: 20px; 
    padding: 10;
    object-fit: cover ;
}

  </style>
  <header>
    <div class="container">
        <div class="row">
            <div class="column">
                <img id="img-logo" src="images/logo.PNG">
            </div>
            <div class="column">
                <!-- <h1>Ivory Key Productions</h1> -->
    <h1 style="font-family:'Brush Script MT';font-weight:bold;font-size: 48px;line-height:5px">Ivory Key Productions</h1>

    <h4 style="line-height:2px;">Audio Home Music Studio Services</h4>
            </div>
        </div>
    </div>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="videos.html">Video Tutorials</a></li>
        <li><a href="studio.html">Studio Pics</a></li>
        <li><a href="equipment.html">Equipment</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);