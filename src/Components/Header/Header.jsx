import React, { useState } from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { MdDriveFileMoveOutline, MdOutlineComment, MdArrowDropDown } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import { BsCloudCheck } from "react-icons/bs";

import "./Header.scss";
import logo from "../../Assets/logo.png";
import googleMeetIcon from "../../Assets/google_meet_icon.png";
import elephantImg from "../../Assets/elephant.jfif";

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
            <p>Last edit was 4 days ago</p>
          </div>
        </div>
      </div>
      <div className="app__header-right-container">
        <div className="comment-btn">
          <MdOutlineComment />
        </div>
        <div className="meet-btn">
          <img src={googleMeetIcon} alt="meet" />
          <div>
            <MdArrowDropDown />
          </div>
        </div>
        <div className="slideshow-btn">
          <div>
            <AiOutlinePlaySquare />
            <span>Slideshow</span>
          </div>
          <div>
            <MdArrowDropDown />
          </div>
        </div>
        <div className="share-btn">
          <IoMdLock />
          <span>Share</span>
        </div>
        <div className="profile-btn">
          <img src={elephantImg} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
