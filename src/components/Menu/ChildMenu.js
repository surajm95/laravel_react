import React from "react";
import ModalImage from "react-modal-image";

const ChildMenu = ({ child, baseUrl }) => {
  return (
    <div>
      {child.map((child) => (
        <div key={child.id}>
          <h2>{child.menu > 0 ? child.name : null}</h2>
          <div>
            {child.menu && child.menu.length > 0
              ? child.menu.map((childMenu) => (
                  <div className="col" key={childMenu.id}>
                    <h4>{childMenu.title}</h4>
                    <h6>{childMenu.description}</h6>
                    <h5>
                      <i className="fa fa-inr"> ₹ {childMenu.price}</i>
                    </h5>
                    {/* Model popup image  */}
                    <ModalImage
                      className="model"
                      small={baseUrl + childMenu.image.file_url}
                      large={baseUrl + childMenu.image.file_url}
                      alt={childMenu.title}
                    />
                     {/* Model popup image end */}
                    {childMenu.variant && childMenu.variant.length
                      ? childMenu.variant.map((childVariant) => (
                          <div className="table" key={childVariant.id}>
                            {childVariant.title} ₹{childVariant.price}
                          </div>
                        ))
                      : null}
                  </div>
                ))
              : null}
          </div>

          {/* Nested childern  here */}
          {child.children && child.children.length ? (
            <ChildMenu child={child.children} />
          ) : null}
        </div>
      ))}
    </div>
  );
};
export default ChildMenu;
