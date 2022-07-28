import React, { useState } from "react";

import { MdDriveFileMoveOutline } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import { BsCloudCheck } from "react-icons/bs";

import "./Header.scss";
import logo from "../../Assets/logo.png";

const Header = () => {
  const [fileName, setFileName] = useState("File Name Here");

  const handleFileName = (event) => {
    setFileName(event.target.value);
  }

  const menus = [
    "File", "Edit", "View", "Insert", "Format", "Slide", "Arrange", "Tools", "Add-ons", "Help"
  ];

  return (
    <div className="app__header">
      <div className="app__header-left-container">
        <div className="app__header-logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="app__header-title-container">
          <div>
            <div className="input-box">
              <input type="text" value={fileName} onChange={handleFileName} />
            </div>
            <div className="icon-container">
              <div className="icon">
                <BiStar />
                <span>Star</span>
              </div>
              <div className="icon">
                <MdDriveFileMoveOutline />
                <span>Move</span>
              </div>
              <div className="icon">
                <BsCloudCheck />
                <span>See Document Status</span>
              </div>
            </div>
          </div>

          <div>
            <ul className="menu-container">
              {menus.map((item) => (
                <li className="menu" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="app__header-utility-container">Utilities</div>
    </div>
  );
};

export default Header;
