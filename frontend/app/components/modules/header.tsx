"use client";

import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { iconsCSS, rounded } from "../common/icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "../user/service/user.service";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use a more descriptive state variable name
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    menu: false,
    cash: false,
    message: false,
    notification: false,
    account: false,
  });

  const handleAccount = () => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      account: !isDropdownOpen.account,
    });
  };

  const handleLogOut = () => {
    dispatch(logout())
      .then((res: any) => {
        setIsLoggedIn(false); // Update isLoggedIn state after logout
        router.push("/");
      })
      .catch((error: any) => {
        console.log("로그아웃 실행에서 에러가 발생함 : ");
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch user authentication status here
    // e.g., check localStorage or API for token
    setIsLoggedIn(true); // Set isLoggedIn based on authentication status
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <nav
          className={`flex justify-between items-center fixed top-0 w-screen `}
        >
          <div className="flex justify-between items-center">
            <div className={`${rounded}`}>
              <MenuIcon className={iconsCSS} />
            </div>
            <div className={`${rounded}`}>
              <LocalAtmOutlinedIcon className={iconsCSS} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className={`${rounded}`}>
              <TextsmsOutlinedIcon className={iconsCSS} />
            </div>
            <div className={`${rounded}`}>
              <NotificationsOutlinedIcon className={iconsCSS} />
            </div>
            <div className={`${rounded} flex flex-col`}>
              <AccountCircleOutlinedIcon
                className={iconsCSS}
                onClick={() => handleAccount()}
              />
              {isDropdownOpen.account && (
                <div className="flex flex-col">
                  <button onClick={() => handleLogOut()}>logout</button>
                </div>
              )}
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Header;
