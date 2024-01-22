import React from "react";
import { useState, useEffect } from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { LiaBarsSolid } from "react-icons/lia";
import Container from "./Container";
const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function resizeWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    resizeWidth();

    window.addEventListener("resize", resizeWidth);
  }, []);
  return (
    <nav className="py-8">
      <Container>
        <Flex className="lg:flex">
          <div className="lg:w-3/12 text-2xl font-bold">
            <h1>OREBY</h1>
          </div>

          <div className="lg:w-9/12 w-full">
            <LiaBarsSolid
              className="block lg:hidden ml-auto
            absolute top-2.5 right-2.5"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 font-dm text-sm mt-5 lg:mt-0  ">
                <ListItem
                  className="font-bold my-2.5 lg:my-0"
                  itemname="Home"
                />
                <ListItem
                  className="hover:font-bold my-2.5 lg:my-0"
                  itemname="About"
                />
                <ListItem
                  className="hover:font-bold my-2.5 lg:my-0"
                  itemname="Service"
                />
                <ListItem
                  className="hover:font-bold my-2.5 lg:my-0"
                  itemname="Contruct"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
