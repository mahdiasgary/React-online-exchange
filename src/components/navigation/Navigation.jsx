import { useState } from "react";
import { HiBellAlert, HiUser, HiOutlineDocumentCheck } from "react-icons/hi2";
import {HiOutlineMail} from "react-icons/hi"
import { MdOutlineMenu, MdMenuOpen ,MdExitToApp ,MdOutlineDashboard} from "react-icons/md";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import {BiUser} from "react-icons/bi"
import {
  AiOutlineUsergroupAdd,
  AiOutlineQuestionCircle,
  AiFillCaretDown,
  AiOutlineUser
} from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import mm from "../../b.jpg";
// import {HiUser} from "react-icons/fa"
// bg-nav text-textSecond

const Navigation = ({IsSingUP}) => {
  const [showMenu, setShoeMenu] = useState(false);
  // const [navBarColor, setNavBarColor] = useState(false);
  const [showNavItem, setShowNavItem] = useState(false);
  const [showUser, setShowUser] = useState(false);

  return (
    <div>
      <div className="h-[70px]  bg-nav text-white ">
        <div className="flex justify-between mx-8 lg:mx-12 self-center ">
          <div className="flex">
            <div
              onClick={(e) => {
                e.preventDefault();
                setShoeMenu(true);
              }}
              className="lg:hidden text-[28px] w-[115px] text-textSecond mt-5 cursor-pointer hover:text-[#8e6cd6] duration-200"
            >
              <MdOutlineMenu />
            </div>

            <div className="hidden lg:flex">
              <div className="mt-4 min-w-[120px] md:min-w-[140px] ">
                <img src={mm} alt="" />
              </div>
              <div>
                <ul className="flex self-center mt-5">
                  <li
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setShowNavItem(true);
                    }}
                    onMouseLeave={(e) => {
                      e.preventDefault();
                      setShowNavItem(false);
                    }}
                    className="mx-5 py-1 text-[15px] cursor-pointer hover:text-[#8e6cd6] duration-200 "
                  >
                    قیمت لحظه ای رمزارزها{" "}
                    <AiFillCaretDown className="inline text-xs" />
                  </li>
                  <li className="mx-5 py-1 text-[15px] cursor-pointer hover:text-[#8e6cd6] duration-200">
                    معرفی به دوستان
                  </li>
                  <li className="mx-5 py-1 text-[15px] cursor-pointer hover:text-[#8e6cd6] duration-200">
                    راهنمای استفاده
                  </li>
                  <li className="mx-5 py-1 text-[15px] cursor-pointer hover:text-[#8e6cd6] duration-200">
                    سوالی دارید ؟
                  </li>
                </ul>
              </div>
            </div>
            <div
              onMouseEnter={(e) => {
                e.preventDefault();
                setShowNavItem(true);
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                setShowNavItem(false);
              }}
              className={`hidden lg:flex origin-top ${
                !showNavItem && "scale-y-0"
              } duration-200 absolute right-[210px] top-[44px] w-[178px] h-[230px] pt-4 bg-nav z-10 shadow-xl`}
            >
              <div>
                <ul className="text-[15px] ">
                  <li className="px-5 my-2  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    بیت کوین
                  </li>
                  <li className="px-5 my-7  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    اتریوم
                  </li>
                  <li className="px-3 mx-3 mt-7 border-b border-[#8e6cd6] pb-4  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    تتر
                  </li>
                  <li className="pr-5 my-4  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    سایر ارز های دیجیتال
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-4">
            <div>
              <img src={mm} alt="" className="w-[130px] md:w-[140px] " />
            </div>
          </div>

{IsSingUP ? 
          <div className="flex mt-6">
            <div className="w-[28px] lg:flex justify-center hidden ">
              <HiBellAlert className="bg-textSecond text-text  h-[24px] w-[24px] p-[2px] rounded-[50%] hover:w-[26px] hover:h-[26px] duration-200 cursor-pointer " />
              <div className="absolute w-[16px] h-[15px]  top-4 left-[85px] lg:left-[108px] flex justify-center bg-pramery rounded-[50%] ">
                <span className=" text-xs   self-center  ">0</span>
              </div>
            </div>
            <div className="mr-2 lg:mr-4 w-[28px] flex justify-center ">
              <HiUser
              onClick={(e)=>{e.preventDefault();setShowUser(true)}}
              className=" bg-textSecond text-text text-[22px] h-[24px] w-[24px] p-[2px] rounded-[50%] hover:w-[26px] hover:h-[26px] duration-200 cursor-pointer " />
            </div>
          </div>
          :
          <div className="flex text-[15px] md:text-[15px] mt-5 ">
            <div className="ml-3">ورود</div>
            <div>
              <button className="bg-pramery px-4 py-1 rounded-sm hover:rounded-md hover:bg-[#6132c7]
               duration-300  ">ثبت نام</button>
            </div>



          </div>


}


        </div>
      </div>
      <div
      onClick={(e)=>{e.preventDefault() ; setShoeMenu(false) ; setShowUser(false)}}
        className={`absolute  w-full h-[100%] top-0 z-20 bg-nav bg-opacity-30 backdrop-blur-sm 
        ${!showMenu && "hidden" } `}
      ></div>
        <div
      onClick={(e)=>{e.preventDefault() ; setShoeMenu(false) ; setShowUser(false)}}
        className={`absolute  w-full h-[100%] top-0 z-20 bg-nav bg-opacity-30 backdrop-blur-sm 
         ${!showUser && "hidden" } `}
      ></div>

      <div
        className={` origin-right lg:hidden ${
          !showMenu && "scale-x-0"
        } duration-300 top-0 absolute w-[270px] h-[100%] flex flex-col justify-between z-30 bg-white pr-8 pt-5 text-text
`}
      >
        <div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setShoeMenu(false);
            }}
            className=" text-[26px] text-[#a3a5a8] cursor-pointer h-[20px] "
          >
            <BsArrowRight className="hover:text-text hover:text-[28px] duration-150" />
          </div>

          <div>
            <ul>
              <li>
                <div 
                 onClick={(e) => {
                  e.preventDefault();
                  setShowNavItem(!showNavItem);
                }}
                
                className={`${showNavItem ? "pb-4" : "mb-8"} flex mt-10 cursor-pointer hover:text-pramery duration-200`}>
                  <div className={`mx-3  text-pramery text-[22px] `}>
                    <GoGraph />
                  </div>
                  <div>
                    قیمت لحظه ای رمزارزها{" "}
                    <AiFillCaretDown className="inline text-xs" />
                  </div>
                </div>
                <div className={`origin-top ${!showNavItem && "scale-y-0 "} duration-300 ${!showNavItem && "hidden duration-1000 "}  border rounded-sm ml-3  `}>
                <ul>
                  <li className="px-5 my-2  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    بیت کوین
                  </li>
                  <li className="px-5 my-7  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    اتریوم
                  </li>
                  <li className="px-3 mx-3 mt-7 border-b border-[#8e6cd6] pb-4  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    تتر
                  </li>
                  <li className="pr-5 my-4 mb-8  cursor-pointer hover:text-[#8e6cd6] duration-200">
                    سایر ارز های دیجیتال
                  </li>
                </ul>
                </div>
              </li>
              <li>
                <div className={`duration-300 ${showNavItem ? "my-4" : "my-8"} flex  cursor-pointer hover:text-pramery duration-200 `}>
                  <div className="mx-3  text-pramery text-[25px] ">
                    <AiOutlineUsergroupAdd />
                  </div>
                  <div>معرفی به دوستان</div>
                </div>
              </li>
              <li>
                <div className="flex my-8 cursor-pointer hover:text-pramery duration-200">
                  <div className="mx-3  text-pramery text-[23px] ">
                    <HiOutlineDocumentCheck />
                  </div>
                  <div>راهنمای استفاده</div>
                </div>
              </li>
              <li>
                <div className="flex my-8 cursor-pointer hover:text-pramery duration-200">
                  <div className="mx-3  text-pramery text-[22px] ">
                    <AiOutlineQuestionCircle />
                  </div>
                  <div>سوالی دارید؟</div>
                </div>
              </li>
            </ul>
          </div>
        </div>




        <div className="flex justify-center mb-8 ml-5 text-[#8a8b8d] ">
          <div className="text-[20px] y9:text-[26px] mx-1 cursor-pointer hover:text-pramery duration-200 ">
            {" "}
            <IoLogoYoutube />{" "}
          </div>
          <div className="text-[20px] y9:text-[23px] mx-1 cursor-pointer hover:text-pramery duration-200 ">
            {" "}
            <BsFacebook />{" "}
          </div>
          <div className="text-[20px] y9:text-[23px] mx-1 cursor-pointer hover:text-pramery duration-200 ">
            {" "}
            <BsLinkedin />{" "}
          </div>
          <div className="text-[20px] y9:text-[23px] mx-1 cursor-pointer hover:text-pramery duration-200 ">
            <BsInstagram />{" "}
          </div>
        </div>
      </div>
      
      <div className={`top-0 left-[0px] bg-white origin-left ${!showUser && "scale-x-0"} duration-300 absolute z-30 w-[230px] h-[100%] text-text `}>
      <div>
      <div
            onClick={(e) => {
              e.preventDefault();
              setShowUser(false);
            }}
            className=" text-[26px] flex justify-end ml-8 mt-5 text-[#a3a5a8] cursor-pointer h-[20px] "
          >
            <BsArrowLeft className="hover:text-text hover:text-[28px] duration-150" />
          </div>
            <ul>
              
              <li>
                <div className={`duration-300 ${showNavItem ? "my-4" : "my-8"} flex  cursor-pointer hover:text-pramery duration-200 `}>
                  <div className="mx-3  text-pramery text-[24px] ">
                    <MdOutlineDashboard />
                  </div>
                  <div>داشبورد</div>
                </div>
              </li>
              <li>
                <div className="flex my-8 cursor-pointer hover:text-pramery duration-200">
                  <div className="mx-3  text-pramery text-[25px] ">
                    <BiUser />
                  </div>
                  <div> حساب کاربری</div>
                </div>
              </li>
              <li>
                <div className="flex my-8 cursor-pointer hover:text-pramery duration-200">
                  <div className="mx-3  text-pramery text-[24px] ">
                    <HiOutlineMail />
                  </div>
                  <div>تیکت های من</div>
                </div>
              </li>
              <li className="border-b border-pramery mx-5"></li>
              <li>
                <div className="flex my-8  cursor-pointer text-red-500 duration-200">
                  <div className="mx-3   text-[22px] ">
                    <MdExitToApp />
                  </div>
                  <div>خروج</div>
                </div>
              </li>
            </ul>
          </div>
</div>

    </div>
  );
};

export default Navigation;
