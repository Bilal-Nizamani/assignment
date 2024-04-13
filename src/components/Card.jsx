"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import Box from "@/utils/Box";
import Button from "@/utils/Button";
import Line from "@/utils/Line";
const Card = () => {
  const [pages, setPages] = useState([
    { name: "page1", svg: "normal", isSelected: false },
    { name: "page2", svg: "normal", isSelected: false },
    { name: "page3", svg: "normal", isSelected: false },
    { name: "page4", svg: "normal", isSelected: false },
    { name: "page5", svg: "normal", isSelected: false },
    { name: "page6", svg: "normal", isSelected: false },
    { name: "page7", svg: "normal", isSelected: false },
    { name: "page8", svg: "normal", isSelected: false },
  ]);
  const [allPageBtn, setAllPageBtn] = useState("normal");
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectItem = (event) => {
    const id = event.currentTarget.getAttribute("shared-id"); // Get the shared id attribute
    setPages((old) => {
      const copy = [...old];
      copy[id].isSelected = !copy[id].isSelected;
      copy[id].svg = copy[id].isSelected ? "hoverSelected" : "hover";

      for (let i = 0; i < copy.length; i++) {
        if (!copy[i].isSelected) {
          setAllSelected(false);
          setAllPageBtn("normal");
          return copy;
        }
      }
      setAllSelected(true);
      setAllPageBtn("selected");
      return copy;
    });
  };

  const handleMouseOver = (event) => {
    const id = event.currentTarget.getAttribute("shared-id"); // Get the shared id attribute
    if (id === "allPages") {
      setAllPageBtn(allPageBtn === "selected" ? "hoverSelected" : "hover");
      return;
    }
    setPages((old) => {
      const copy = [...old];
      copy[id].svg = copy[id].isSelected ? "hoverSelected" : "hover";

      return copy;
    });
  };
  const selectAll = () => {
    setAllSelected((old) => {
      setAllPageBtn(!old ? "hoverSelected" : "hover");
      return !old;
    });

    setPages((old) => {
      const copy = [...old];
      copy.forEach((item) => {
        if (allSelected) {
          item.svg = "normal";
          item.isSelected = false;
        } else {
          item.svg = "selected";
          item.isSelected = true;
        }
      });
      return copy;
    });
  };
  const handleMouseDown = (event) => {
    const id = event.currentTarget.getAttribute("shared-id"); // Get the shared id attribute

    if (id === "allPages") {
      setAllPageBtn("active");
      return;
    }
    setPages((old) => {
      const copy = [...old];
      copy[id].svg = copy[id].isSelected ? "selected" : "active";
      return copy;
    });
  };
  const handleMouseOut = (event) => {
    const id = event.currentTarget.getAttribute("shared-id"); // Get the shared id attribute

    if (id === "allPages") {
      setAllPageBtn(allSelected ? "selected" : "normal");
      return;
    }
    setPages((old) => {
      const copy = [...old];
      copy[id].svg = copy[id].isSelected ? "selected" : "normal";
      return copy;
    });
  };
  return (
    <div>
      <div className={styles.form}>
        <div
          shared-id="allPages"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={selectAll}
          className={styles.allPages}
        >
          All-Pages <Box boxToShow={allPageBtn} sharedID="allPages" />
        </div>
        <Line />
        <div className={styles.fram}>
          {pages.map((item, index) => {
            return (
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onMouseDown={handleMouseDown}
                onClick={handleSelectItem}
                className={styles.item}
                shared-id={index}
                key={index}
              >
                {item.name}
                <Box boxToShow={item.svg} id={index} />
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
