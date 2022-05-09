import React, { useState } from "react";
import Logo from "../img/chef1.png";
import Avatar from "../img/avatar.png";
import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, provider } from "../firebase.config";
import { useStateValue } from "../contextProvider/StateProvider";
import { actionType } from "../contextProvider/reducer";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 md:p-4 md:px-10 bg-primary">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="object-cover w-16" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-4 -right-3">
              <p className="text-xs text-white font-semibold">3</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              onClick={login}
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt=""
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0"
              >
                {user && user.email === "brightakakpo40@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      className="flex px-4 py-2 items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className="flex px-4 py-2 items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*Mobile View */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-14 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center justify-between gap-8">
          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-4 -right-3">
              <p className="text-xs text-white font-semibold">3</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              onClick={login}
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt=""
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0"
              >
                {user && user.email === "brightakakpo40@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      className="flex px-4 py-2 items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <ul className="flex flex-col">
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </li>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(false)}
                  >
                    Menu
                  </li>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(false)}
                  >
                    About Us
                  </li>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(false)}
                  >
                    Service
                  </li>
                </ul>

                <p
                  onClick={logout}
                  className="flex px-4 py-2 items-center justify-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
