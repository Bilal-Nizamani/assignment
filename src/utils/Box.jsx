import React from "react";
import Image from "next/image";
import hover from "../../public/check-box/hover.svg";
import normal from "../../public/check-box/normal.svg";
import styles from "./Box.module.css";
const Box = () => {
  return (
    <div className={styles.checkBox}>
      <Image src={normal} alt="My SVG" width={23} height={23} />
    </div>
  );
};

export default Box;
