import "./App.css";
import data from "./data";
import Navbar from "./Navbar";
import Card from "./Card";

export default function App() {
  return (
    <div>
      <Navbar />
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
