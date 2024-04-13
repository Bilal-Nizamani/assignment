"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import Box from "@/utils/Box";
import Button from "@/utils/Button";
import Line from "@/utils/Line";
const pages = [
  { name: "page1" },
  { name: "page1" },
  { name: "page1" },
  { name: "page1" },
  { name: "page1" },
  { name: "page1" },
  { name: "page1" },
  { name: "page1" },
];
const Card = () => {
  const [first, setfirst] = useState("");

  const handleSelectItem = (event) => {
    console.log(`clicked ${event.target.id}`);
  };
  const handleMouseOver = (event) => {
    console.log(`Mouseover ${event.target.id}`);
  };

  const handleMouseOut = (event) => {
    console.log(`Mouseout ${event.target.id}`);
  };

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.allPages}>
          All-Pages <Box />
        </div>
        <Line />
        <div className={styles.fram}>
          {pages.map((item, index) => {
            return (
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleSelectItem}
                className={styles.item}
                id={index}
                key={index}
              >
                {item.name}
                <Box boxToShow={""} isClicked={""} />
              </div>
            );
          })}
        </div>
        <Line />
        <Button />
      </div>
    </div>
  );
};

export default Card;
