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
import { getAccessToken } from "./cookies"; // Import getAccessToken from cookies.js

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    menu: false,
    cash: false,
    message: false,
    notification: false,
    account: false,
  });

  const user = {
    username: "1",
    password: "1",
  };

  const handleAccount = () => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      account: !isDropdownOpen.account,
    });
  };

  const handleLogOut = () => {
    dispatch(logout(user))
      .then((res: any) => {
        setIsLoggedIn(false);
        router.push("/");
      })
      .catch((error: any) => {
        console.log("로그아웃 실행에서 에러가 발생함 : ");
        console.log(error);
      });
  };

  const checkAuthentication = async () => {
    const accessToken: any = await getAccessToken();
    if (accessToken === "accessToken") setIsLoggedIn(!!accessToken);
  };

  useEffect(() => {
    checkAuthentication();
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
