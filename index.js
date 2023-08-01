// const h1 = document.createElement("h1");
// h1.textContent = "Welcome to React";
// h1.className = "header";
// console.log();

// JSX

const navbar = (
  <nav>
    <h1>Sana's Bookstore</h1>
    <ul>
      <li>Non-Fiction</li>
      <li>Biographies</li>
      <li>History</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
