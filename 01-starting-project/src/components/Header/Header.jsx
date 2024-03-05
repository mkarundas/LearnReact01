import reaxtImage from "../../assets/react-core-concepts.png";
import './Header.css'

const reactdes = ["Goat", "Monkey", "Donkey"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const result = reactdes[genRandomInt(2)];
    return (
      <header>
        <img src={reaxtImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {result} React concepts you will need for almost any app you are going
          to build!
        </p>
      </header>
    );
  }
  