export default function App() {
  return (
    <div class="container">
      <div className="menu-icon">
        <img
          className="menu-img"
          src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
        />
        <p>Brand</p>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>
      <div className="profile-div">
        <img
          className="profile-img"
          src="https://freesvg.org/img/abstract-user-flat-4.png"
        />
      </div>
    </div>
  );
}
