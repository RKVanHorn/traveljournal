import "./App.css";
import data from "./data";
import Navbar from "./Navbar";
import Card from "./Card";

export default function App() {
  const cards = data.map((item) => <Card key={item.id} {...item} />);
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
