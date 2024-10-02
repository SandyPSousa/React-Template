export default function App() {
  return (
    <div class="container">
      <div className="menu-icon">
        <img
          className="menu-img"
          src="https://img.freepik.com/free-photo/realistic-s-letter-with-soft-texture_23-2150458467.jpg?t=st=1727882878~exp=1727886478~hmac=67dc83a06424e1b4cae22d3e42f14fd992b6b1710bc637fd481084981686d6b4&w=740"
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
