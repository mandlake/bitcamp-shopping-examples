"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { iconsCSS, rounded } from "../common/icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  // const dispatch = useDispatch();
  // const router = useRouter();
  // const [showHeader, setShowHeader] = useState(false);
  // const [isNone, setIsNone] = useState(true);

  // const handleClick = () => {
  //   setIsNone(!isNone);
  // };

  // useEffect(() => {
  //   console.log("헤더 useEffect 쿠키 : " + parseCookies().accessToken);
  //   if (parseCookies().accessToken !== undefined) {
  //     console.log("쿠키가 있어서 보임");
  //     setIsNone(true);
  //     setShowHeader(true);
  //   } else {
  //     console.log("쿠키가 없어서 안보임");
  //     setIsNone(false);
  //     setShowHeader(false);
  //   }
  // }, [parseCookies().accessToken]);

  return (
    <>
      <header className="flex justify-between items-center fixed top-0  w-screen">
        <div className="flex justify-between items-center">
          <div className={rounded}>
            <MenuIcon className={iconsCSS} />
          </div>
          <div className={rounded}>
            <LocalAtmOutlinedIcon className={iconsCSS} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className={rounded}>
            <TextsmsOutlinedIcon className={iconsCSS} />
          </div>
          <div className={rounded}>
            <NotificationsOutlinedIcon className={iconsCSS} />
          </div>
          <div className={rounded}>
            <ShoppingBagOutlinedIcon className={iconsCSS} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
function useForm() {
  throw new Error("Function not implemented.");
}

function parseCookies() {
  throw new Error("Function not implemented.");
}
