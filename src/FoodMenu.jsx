import React, { useState, useEffect } from "react";
import FoodItems from "./FoodItems";
import { Tab, Tabs, IconButton } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material"; // Importing the arrow icon

function App() {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: `Meal`,
    },
    {
      id: 2,
      name: `Snack`,
    },
    {
      id: 3,
      name: `Sides`,
    },
    {
      id: 4,
      name: `erwwer`,
    },
    {
      id: 5,
      name: `124234`,
    },
    {
      id: 6,
      name: `sdsdffsdfsd`,
    },
  ]);

  // useEffect(() => {
  //   // Fetch food categories from your database or API
  //   const fetchCategories = async () => {
  //     const response = await fetch("/api/food-categories"); // Adjust to your API endpoint
  //     const data = await response.json();
  //     setCategories(data); // Assume your API returns an array of categories
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <>
      <Tabs
        value={value}
        variant="scrollable"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        onChange={(e, newValue) => setValue(newValue)}
      >
        {categories.map((category, index) => (
          <Tab label={category.name} key={index}></Tab>
        ))}
      </Tabs>

      {categories.length > 0 && <FoodItems id={categories[value].id} />}
    </>
  );
}

export default App;
