import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ - Panier : ${total}€`;
  }, [total]);

  function removeFromCart(name) {
    const newCart = cart.filter((plant) => plant.name !== name);
    updateCart(newCart);
  }

  return (
    <>
      <div className={`lmj-cart-animated${isOpen ? " open" : " closed"}`}>
        {isOpen && (
          <div className="lmj-cart">
            <button
              className="lmj-cart-toggle-button"
              onClick={() => setIsOpen(false)}
            >
              Fermer
            </button>
            {cart.length > 0 ? (
              <div>
                <h2>🛒 Panier</h2>
                <ul>
                  {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`} className="lmj-cart-item">
                      <span>
                        {name} {price}€ x {amount}
                      </span>
                      <button
                        className="lmj-cart-remove"
                        onClick={() => removeFromCart(name)}
                        title="Supprimer"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </ul>
                <h3>Total :{total}€</h3>
                <button onClick={() => updateCart([])}>Vider le panier</button>
              </div>
            ) : (
              <div>Votre panier est vide</div>
            )}
          </div>
        )}
      </div>
      {!isOpen && (
        <div className="lmj-cart-closed">
          <button
            className="lmj-cart-toggle-button"
            onClick={() => setIsOpen(true)}
            title="Ouvrir le panier"
          >
            🛒
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
