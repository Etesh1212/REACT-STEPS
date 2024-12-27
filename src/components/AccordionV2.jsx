import { useState } from "react";
import styles from "../style/Accordion.module.css";

import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

function AccordionV2(props) {
  const { contents } = props;
  const [open, setOpen] = useState(new Array(contents.length).fill(false));

  function handleClick(index) {
    setOpen(function (currState) {
      currState[index] = !currState[index];
      return [...currState];
    });
  }

  return (
    <div className={styles.container}>
      {contents.map(function (content, index) {
        return (
          <Row
            title={content.title}
            details={content.details}
            key={index}
            handleClick={handleClick}
            isOpen={open === index}
            isOpen={open[index]}
            index={index}
          />
        );
      })}
    </div>
  );
}

function Row(props) {
  const { title, details, handleClick, index, isOpen } = props;

  return (
    <div onClick={() => handleClick(index)} className={styles.row}>
      <h3 className={styles.title}>
        <span>
          {title} {isOpen ? <HiMiniMinus /> : <HiMiniPlus />}
        </span>
      </h3>

      {isOpen && <p className={styles.details}>{details}</p>}
    </div>
  );
}

export default AccordionV2;
