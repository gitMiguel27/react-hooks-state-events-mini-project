import React from "react";

function CategoryFilter({ categories, selectedCategory, setCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        const toggleClass = category === selectedCategory ? 'selected' : '';
        return <button className={toggleClass} key={category} onClick={() => setCategory(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
