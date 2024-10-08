import "./main.css";

export default function App() {
  return (
    <div className="container">
      <div className="menu-div">
        <img className="brand-img" src="https://img.freepik.com/free-photo/realistic-s-letter-with-soft-texture_23-2150458467.jpg?t=st=1727882878~exp=1727886478~hmac=67dc83a06424e1b4cae22d3e42f14fd992b6b1710bc637fd481084981686d6b4&w=740" />
        <h3>Social</h3>
        <div className="menu-icon-div">
          <img className="menu-img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNEBO2OUKQjP-RSbIZae3jIq76g3rMrn9vQ&s" />
        </div>
      </div>

      <div className="items-div">
        <nav className="nav">
          <ul>
            <li className="list-item">Posts</li>
            <li className="list-item">Friends</li>
            <li className="list-item">Photos</li>
            <li className="list-item">Videos</li>
            <li className="list-item">Settings</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
