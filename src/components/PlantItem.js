import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ cover, name, water, light, price, addToCart, style }) {
  return (
    <li className="lmj-plant-item" style={style}>
      <span className="lmj-plant-item-price">{price}€</span>
      <div className="lmj-plant-item-image-wrapper">
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        <button
          className="lmj-plant-btn-add"
          onClick={(e) => {
            e.stopPropagation();
            addToCart();
          }}
        >
          Ajouter au panier
        </button>
      </div>
      <div className="lmj-plant-item-content">
        <h4 className="lmj-plant-item-name">{name}</h4>
        <div className="lmj-plant-item-care">
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </div>
    </li>
  );
}

export default PlantItem;
