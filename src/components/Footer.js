import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-content">
        <span>
          © {new Date().getFullYear()} La Maison Jungle&nbsp;
          <span role="img" aria-label="plante">
            🌱
          </span>
        </span>
        <a
          href="https://github.com/Tiavina19"
          target="_blank"
          rel="noopener noreferrer"
          className="lmj-footer-link"
        >
          Mon GitHub
        </a>
        <div className="lmj-footer-newsletter">
          <label
            htmlFor="newsletter-email"
            className="lmj-footer-newsletter-label"
          >
            📧 Newsletter :
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Votre email pour la newsletter"
            value={inputValue}
            onChange={handleInput}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
