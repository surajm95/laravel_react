import React from "react";
import Button from "react-bootstrap/Button";

const MenuFilter = ({ menu, filterItem, activeMenu }) => {
  
  return (
    <div style={{ display: "flex" }}>
      {menu.map((item) => (
        <div key={item.id}>
          <Button
            variant={
              activeMenu === item.name ? "primary" : "outline-info"
            }
            onClick={() => filterItem(item.name)}
          >
            {item.name}
          </Button>
        </div>
      ))}
    </div>
  );
};
export default MenuFilter;
