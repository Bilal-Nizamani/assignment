import React from "react";
import Image from "next/image";
import hover from "../../public/check-box/hover.svg";
import normal from "../../public/check-box/normal.svg";
import selected from "../../public/check-box/selected.svg";
import hoverSelected from "../../public/check-box/hoverSelected.svg";
import active from "../../public/check-box/active.svg";
import styles from "./Box.module.css";
const boxes = { normal, hover, selected, hoverSelected, active };
const Box = ({ boxToShow, id }) => {
  if (!boxes.hasOwnProperty(boxToShow)) {
    console.error(`Invalid boxToShow prop: ${boxToShow}`);
    return (
      <div shared-id={id} className={styles.checkBox}>
        <Image
          shared-id={id}
          src={boxes.normal}
          alt="My SVG"
          width={23}
          height={23}
        />
      </div>
    );
  }
  return (
    <div shared-id={id} className={styles.checkBox}>
      <Image
        shared-id={id}
        src={boxes[boxToShow]}
        alt="My SVG"
        width={23}
        height={23}
      />
    </div>
  );
};

export default Box;
