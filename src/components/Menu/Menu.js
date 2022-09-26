import React, { useState, useEffect } from "react";
import ChildMenu from "./ChildMenu";
import MenuFilter from "./MenuFilter";
import ModalImage from "react-modal-image";
import "./Menu.css";

const Menu = () => {
  const [menu, setmenu] = useState([]);
  const [filtermenu, setfiltermenu] = useState([]);
  const [activeMenu, setactiveMenu] = useState("");
  const [baseUrl, setbaseUrl] = useState("");

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/menu/menuapi")
      .then((response) => response.json())
      .then((result) => {
        setmenu(result.category);
        setbaseUrl(result.data);
        setfiltermenu(result.category);
        setactiveMenu(result.category[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItem = (cateItem) => {
    const UpdatedItem = menu.filter((curElem) => {
      return curElem.name === cateItem;
    });
    setfiltermenu(UpdatedItem);
    setactiveMenu(cateItem);
  };

  return (
    <div className="container" id="menu">
      <div>
        <h6 className="text-center text-danger">OURS MENU</h6>
        <h2 className="text-center text-dark"> KAJU'S PIZZA </h2>
        <p className="text-center mb-5 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu. adipiscing elit. Ut blandit arcu.
        </p>
      </div>
      <MenuFilter
        menu={menu}
        filterItem={filterItem}
        activeMenu={activeMenu}
        setfiltermenu={setfiltermenu}
      />
      <div className="row align-items-center">
        {filtermenu.length < 2 ? (
          filtermenu.map((parent) => (
            <div key={parent.id}>
              <h2>{parent.name}</h2>
              <div>
                {parent.menu && parent.menu.length
                  ? parent.menu.map((parentMenu) => (
                      <div className="col" key={parentMenu.id}>
                        <h4>{parentMenu.title}</h4>
                        <h6>{parentMenu.description}</h6>
                        <h5>
                          {" "}
                          <i className="fa fa-inr"> ₹ {parentMenu.price}</i>
                        </h5>
                        {/* Model popup image  */}
                        <ModalImage
                          className="model"
                          small={baseUrl + parentMenu.image.file_url}
                          large={baseUrl + parentMenu.image.file_url}
                          // hideDownload = 'true'
                          alt={parentMenu.title}
                        />
                        {/* Model popup image end */}
                        {parentMenu.variant && parentMenu.variant.length
                          ? parentMenu.variant.map((parentVariant) => (
                              <div className="table" key={parentVariant.id}>
                                {parentVariant.title} ₹{parentVariant.price}
                              </div>
                            ))
                          : null}
                      </div>
                    ))
                  : null}
              </div>

              {/* childern here */}
              {parent.children && parent.children.length ? (
                <ChildMenu child={parent.children} baseUrl={baseUrl} />
              ) : null}
            </div>
          ))
        ) : (
          <div key={filtermenu[0].id}>
            <h2>{filtermenu[0].name}</h2>
            <div>
              {filtermenu[0].menu && filtermenu[0].menu.length
                ? filtermenu[0].menu.map((parentMenu) => (
                    <div className="col" key={parentMenu.id}>
                      <h4>{parentMenu.title}</h4>
                      <h6>{parentMenu.description}</h6>
                      <h5>
                        {" "}
                        <i className="fa fa-inr"> ₹ {parentMenu.price}</i>
                      </h5>
                      {/* Model popup image  */}
                      <ModalImage
                        className="model"
                        small={baseUrl + parentMenu.image.file_url}
                        large={baseUrl + parentMenu.image.file_url}
                        alt={parentMenu.title}
                      />
                      {/*  Model popup image end */}
                      {parentMenu.variant && parentMenu.variant.length
                        ? parentMenu.variant.map((parentVariant) => (
                            <div className="table" key={parentVariant.id}>
                              {parentVariant.title} ₹{parentVariant.price}
                            </div>
                          ))
                        : null}
                    </div>
                  ))
                : null}
            </div>

            {/* childern here */}
            {filtermenu[0].children && filtermenu[0].children.length ? (
              <ChildMenu child={filtermenu[0].children} baseUrl={baseUrl} />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
export default Menu;
