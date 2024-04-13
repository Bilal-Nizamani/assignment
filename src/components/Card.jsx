"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import Box from "@/utils/Box";
import Button from "@/utils/Button";
import Line from "@/utils/Line";

const Card = () => {
  // State for individual pages
  const [pages, setPages] = useState([
    { name: "Page 1", svg: "normal", isSelected: false },
    { name: "Page 2", svg: "normal", isSelected: false },
    { name: "Page 3", svg: "normal", isSelected: false },
    { name: "Page 4", svg: "normal", isSelected: false },
    { name: "Page 5", svg: "normal", isSelected: false },
    { name: "Page 6", svg: "normal", isSelected: false },
    { name: "Page 7", svg: "normal", isSelected: false },
    { name: "Page 8", svg: "normal", isSelected: false },
  ]);

  // State for all page button
  const [allPageBtn, setAllPageBtn] = useState("normal");
  const [allSelected, setAllSelected] = useState(false);

  // Function to handle individual item selection
  const handleSelectItem = (event) => {
    const id = event.currentTarget.getAttribute("shared-id");
    setPages((old) => {
      const copy = [...old];
      copy[id].isSelected = !copy[id].isSelected;
      copy[id].svg = copy[id].isSelected ? "hoverSelected" : "hover";

      // Check if all pages are selected
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

  // Function to handle select all pages
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

  // Function to handle mouse down event
  const handleMouseDown = (event) => {
    const id = event.currentTarget.getAttribute("shared-id");
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

  // Function to handle mouse over event
  const handleMouseOver = (event) => {
    const id = event.currentTarget.getAttribute("shared-id");
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

  // Function to handle mouse out event
  const handleMouseOut = (event) => {
    const id = event.currentTarget.getAttribute("shared-id");
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
        {/* All Pages Button */}
        <div
          shared-id="allPages"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={selectAll}
          className={styles.allPages}
        >
          All Pages <Box boxToShow={allPageBtn} sharedID="allPages" />
        </div>
        <Line />
        {/* Pages List */}
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
        {/* Button Component */}
        <Button />
      </div>
    </div>
  );
};

export default Card;
