import { useState } from "react";
import "../styles/Categories.css";

function Categories({ categories, setActiveCategory }) {
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    setSelected(e.target.value);
    setActiveCategory(e.target.value);
  }

  function handleReset() {
    setSelected("");
    setActiveCategory("");
  }

  return (
    <div className="lmj-categories-container">
      <span className="lmj-categories-label">Catégorie:</span>
      <select
        className="lmj-categories-select"
        value={selected}
        onChange={handleChange}
      >
        <option value="">Toutes les catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        className="lmj-categories-reset
      "
        onClick={handleReset}
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default Categories;
