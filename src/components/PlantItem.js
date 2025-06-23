import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ id, cover, name, water, light }) {
  function handleClick(e) {
    alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`);
  }

  return (
    <li className="lmj-plant-item" onClick={handleClick}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
