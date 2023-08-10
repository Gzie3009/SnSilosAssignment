"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "@/app/GlobalRedux/Features/userSlice";
import CartSlider from "./CartSlider";
import LoginContainer from "./LoginContainer";
import { toast } from "react-toastify";
import Image from "next/image";
const Navbar = () => {
  const dispatch = useDispatch();
  const [sideNav, setSideNav] = useState<boolean>(false);
  const [showLoginContainer, setShowLoginContainer] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  useEffect(() => {
    const user = localStorage.getItem("JWT");
    if (user) {
      dispatch(loginUser());
      setUser(true);
    }
  }, []);
  const handleLogout=()=>{
    localStorage.clear()
    setUser(false)
    dispatch(logoutUser())
    toast.success("Successfully Logged Out")
  }
  return (
    <>
      <div className="drawer sticky top-0 shadow-lg z-40">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-white">
            <Link href={"/"} className="flex-1 lg:p-2 lg:mx-2">
              <Image
                alt="Icon"
                className="h-10 w-10 md:h-20 md:w-20"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAYFBMVEX///+XyT6aykTk8c3Z67rO5aSfzU3s9dzU6K/B34yl0Fjf7sPz+emcy0jH4pjo89Xw9+O73IKp0mD7/fiz13Ks1Ga42nzF4ZTK453g78b3+/G12Hbl8dDW6bP1+eyv1WqRfDJ5AAAEYUlEQVR4nNWd2WLiMAxFEwopW5pCoGzt9P//cugwG1BsKdbVoneTc4iTeFdVwWM53p3Wzaiu22a72h+O+CtKRreb1zexnSytqajRT+/oL7E5WKNRop803+N/xXphjZeNxYN//+9deLUmTMbxLY1/jtHEGjIRXebv/30T3L6RFiMKf13PnVajKQ3/HM2zNet3Qec/f9w6a9r74PB7NODx+6tFXH5vBnx+XwZD+D0ZDOP3YzCU34vBcH4fBiX8HgzK+O0NSvmtDcr5bQ0k+C0NZPjtDKT4rQzk+G0MJPktDGT59Q2k+bUN5Pl1DRj8xJEWXQMGf9tN/Bmw+KvKnQGT353BmMvvzGAAvyuDQfyODAbyuzFg8I/er4u6MODwP90WdmBQxO/AoJDf3KCY39hAgN/UQITf0ECI38xAjN/IQJDfxECU38BAmF/dQJxf2QDAr2oA4ecZFK0MAfHzDArW2sH4WQbrweuLgPwsgzeP/CyDqUf+qnqh//6QBxnOzzEYUIkU+DkG7Euo8DMMtj75GQa8q6jx0w1OTvnpBj+c8pMN6N8CZX6qwadbfqpB75afaEC7mgk/zWDvmJ9ksPLMTzEgfIwN+QkGjW/+vEHrnD9vkCm+sOavXjPrKtKln+z5E/vPfl02Xbr1zp9+Bvq1e/56nio+88+f7BG8B+Cvd4+L0yuQIX/98bg8fQUQZjMqib9OjA2RylvzJ1oSHxH469njX6A+Aab8if7Mcwj+RA0ijgrY8teJbdS0GmTMP3o8yXGMwJ/6ipGa0Rj+JWkH+1c0iVkmyiNgzZ/6Clf5cwjs+ZOjcvln2Jy/Tc4wZZ8jc/4MQW6Bvz1/5iQN9/wvmd+yEODwJxpxlzCoQqL8Bg+xLL/+a1SYX/1DJs2v3ZQQ51duzMnz6zanAfyqHRoIv2KXEsOv16kH8asNq8D4lQa2cPw6Q4tIfo3BXSg/Z35m4PA6lh8/wYHmR08x4fmxk3wK/NBpVhV+4ES3Ej9sqUGvxe9gs0Yhv7lBMb+xgQC/qYEIv6GBEL+ZgRi/kYEgv4mBKL+BgTC/uoE4v7IBgF/VAMKvaADiVzOA8SsZAPlVDKD8CgZgfrgBZUdGYUANFPihBir8QAMlfpjBjLirTSBAB2Oo3QHY0SSRDRTfQpcAHc8T1eDflzimwf9toYgG163ReAa3/YFoBvc9slgGin1iiIHiqATEQHFcCGKgODInY8A4stanAefQYP8GivMDEAPFGRqIgeIcGSVAh8f7NVCcJ4YYKM7UQww4KSwUExhHTyISP41L/EQ68VMZxU8mFT+dV/yEavFT2sVPKhg/rWP8xJrxU5vGTy4bP71v/ATL8VNcx08yHj/NO9/AGz/XoHXHzzO4Hjj1EnQDf/XnEgviGMq8KK0GMjrShpnN4JQU+DiusvijzFEp1rHI3ISN2+rzJ/pJYnfvGnPWjHD00wd3YXOwRiNHt7tz2E4Ux24lYjnendbN+cXaNtvV/iD85vkJiuFRVZxz9VUAAAAASUVORK5CYII="
              ></Image>
              <p className="pl-2 text-sm  md:text-2xl text-black">GZIE Store</p>
            </Link>
            <form className="w-1/3 md:w-1/6 pr-5">
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none border-b bg-white w-full pl-2 focus:border-black text-black"
              ></input>
            </form>
            <div className="flex-none">
              <ul className="menu menu-horizontal">
                {user ? (
                  <li>
                    <button onClick={()=>handleLogout()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-black"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </button>
                  </li>
                ) : (
                  <li className="text-black">
                    <button
                      onClick={() => setShowLoginContainer(!showLoginContainer)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </button>
                  </li>
                )}
                <CartSlider />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showLoginContainer ? (
        <LoginContainer closeContainer={setShowLoginContainer}></LoginContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
