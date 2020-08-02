import React, { useState } from "react";

const NavMenu = () => {
  const [items] = useState([
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Food & Drink",
    },
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Activites",
    },
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Spa",
    },
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Salon",
    },
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Health",
    },
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Movies",
    },
    {
      img: "http://placecorgi.com/20/20",
      link: "https://all4you.co.in/category/food-drink",
      label: "Fun",
    },
  ]);
  return (
    <div className="container">
      <div className="menu">
        <ul className="menu-list text-center">
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.link}>
                <div className="menu-item">
                  <div className="icon-img">
                    <img id="logo-img" src={item.img} alt={item.label} />
                  </div>
                  <p className="heading">{item.label}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
