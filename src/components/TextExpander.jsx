import { useState } from "react";

const textStyle = {
  maxWidth: "40rem",
};

const btnStyle = {
  border: "none",
  backgroundColor: "transparent",
  marginLeft: "0.5rem",
  color: "blue",
  cursor: "pointer",
};

const rawText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
        officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        asperiores repudiandae mollitia officiis voluptas ipsum ad maxime cum
        temporibus nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti suscipit commodi illum quam dicta voluptas tempore,
        consequuntur quos deserunt! Amet totam non, velit placeat atque nisi
        deleniti alias quas ducimus!`;

function TextExpander() {
  const [show, setShow] = useState(false);

  const text = show ? rawText : rawText.slice(0, 90);

  function handleClick() {
    setShow((show) => !show);
  }

  return (
    <div style={textStyle}>
      <span>{text}</span>

      <button style={btnStyle} onClick={handleClick}>
        {show ? "Show less" : "Show More"}
      </button>
    </div>
  );
}

export default TextExpander;
