import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { useState, useRef, useEffect } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  let [CategoryShow, setCategoryShow] = useState(false);
  let [userDropdownShow, setUserDropdownShow] = useState(false);
  let [cartDropdownShow, setCartDropdownShow] = useState(false);

  let cetagoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cetagoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropdownShow(true);
      } else {
        setUserDropdownShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropdownShow(true);
      } else {
        setCartDropdownShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#f5f5f3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative" dropref={cetagoryRef}>
              <p className="flex items-center gap-x-2.5 font-dm font-regular text-sm">
                <RiBarChartHorizontalLine />
                Shop by Category
              </p>
              {CategoryShow && (
                <List className="absolute top-8 w-[263px] bg-primary text-[#767676] font-dm font-regular text-sm">
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 hover:font-bold"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 hover:font-bold"
                    itemname="Furniture"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 hover:font-bold"
                    itemname="Elictronics"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 hover:font-bold"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 hover:font-bold"
                    itemname="Bags"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 hover:font-bold"
                    itemname="Home Appliences"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="w-[600px] relative">
            <Search
              className="w-full py-4 px-5 placeholder:text-[#c4c4c4] outline-none font-dm font-regular text-sm"
              placeholder="Search Product"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative" dropref={userRef}>
                <div className="flex items-center">
                  <FaUser />
                  <VscTriangleDown />
                </div>
                {userDropdownShow && (
                  <List
                    className="absolute top-8 right-0 w-[200px] bg-white
                 text-[#767676] font-dm font-regular text-sm text-center border border-solid border-[#F0F0F0]"
                  >
                    <ListItem
                      className="py-4 px-5 hover:px-7 border-b border-solid border-[#F0F0F0] hover:text-white ease-in duration-300 hover:font-bold hover:bg-primary "
                      itemname="My Account"
                    />
                    <ListItem
                      className="py-4 px-5 hover:px-7 border-b border-solid border-[#F0F0F0] hover:text-white ease-in duration-300 hover:font-bold hover:bg-primary"
                      itemname="LogOut"
                    />
                  </List>
                )}
              </Dropdown>
              <Dropdown className="relative" dropref={cartRef}>
                <FaShoppingCart className="text-xl" />
                {cartDropdownShow && (
                  <div className="absolute top-8 right-0 w-[360px] bg-[#F5F5F3] border border-solid border-[#F0F0F0]P-5">
                    <Flex className="flex justify-between">
                      <div className="w-4/12">
                        <img alt="cart" src="assets/sunglasses.jpg" />
                      </div>
                      <div className="flex flex-col w-4/6 justify-center">
                        <h3 className="font-dm font-bold text-sm text-primary">
                          Black Smart Sunglass
                        </h3>
                        <p className="font-dm font-bold text-sm text-primary mt-3">
                          414$
                        </p>
                      </div>
                      <div className="flex justify-end items-center">
                        <RxCross2 className="text-sm" />
                      </div>
                    </Flex>
                  </div>
                )}
              </Dropdown>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
