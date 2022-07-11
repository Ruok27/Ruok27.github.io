import logo from './logo.svg';
import './App.css';
import profileImage from './img/Okapi.jpg';

function App() {
  return (
    <div className="App">
      <h1>My main page</h1>
      <h2>Author: Jose Fernandez</h2>
      <img src={profileImage} alt="profile-image"/>

    </div>
  );
}

export default App;
