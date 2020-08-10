import React from "react";

const Category = props => {
    const { active, item, index, handleSelection } = props;
    return (
        <a
            className={active ? "nav-link active" : "nav-link"}
            key={index}
            index={index}
            onClick={handleSelection}
        >
            {item.name} ({item.products.length})
        </a>
    );
};

export default Category;
