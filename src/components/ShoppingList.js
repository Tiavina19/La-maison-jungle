import { useState } from "react";
import { plantList } from "../datas/plantList";
import Categories from "./Categories";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <div className="lmj-shopping-header">
        <div className="lmj-shopping-title">
          <span className="lmj-bou">BOU</span>
          <span className="lmj-tique">TIQUE</span>
        </div>
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <ul className="lmj-plant-list">
        {plantList
          .filter(
            (plant) => !activeCategory || plant.category === activeCategory
          )
          .map((plant, index) => (
            <PlantItem
              key={plant.id}
              id={plant.id}
              cover={plant.cover}
              name={plant.name}
              water={plant.water}
              light={plant.light}
              price={plant.price}
              addToCart={() => addToCart(plant.name, plant.price)}
              style={{ "--item-index": index }}
            />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
