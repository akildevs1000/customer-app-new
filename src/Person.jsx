import React, { useState, useEffect } from "react";
import FoodItems from "./FoodItems";
import { Container, Tab, Tabs } from "@mui/material";
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
        onChange={(e, newValue) => setValue(newValue)}
        centered
      >
        {categories.map((category, index) => (
          <Tab label={category.name} key={index} />
        ))}
      </Tabs>

      {categories.length > 0 && <FoodItems id={categories[value].id} />}
    </>
  );
}

export default App;
