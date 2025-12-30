import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_sk, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className='w-full flex justify-center '
    >
      <div className={`${styles.paddingX
        } w-[95%] rounded-3xl flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to="/"
            className="
    group
    flex items-center gap-2
    cursor-pointer
  "
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* Logo */}
            <img
              src={logo_sk}
              alt="logo"
              className="
      w-9 h-9 object-contain
      transition-transform duration-300
      group-hover:scale-110
    "
            />

            {/* Text */}
            <p
              className="
      relative
      text-white text-[18px]
      font-bold
      flex items-center

      transition-colors duration-300
      group-hover:text-white

      after:content-['']
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-full
      after:bg-gradient-to-r
      after:from-yellow-400
      after:to-pink-400
      after:origin-left
      after:scale-x-0
      after:transition-transform
      after:duration-300
      group-hover:after:scale-x-100
       uppercase
    "
            >
              Ayushi&nbsp;
              <span className="sm:block hidden text-secondary font-medium ml-1">
                | MERN DEVELOPER
              </span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`
  relative
  text-[18px]
  font-medium
  cursor-pointer
  transition-all duration-300

  ${active === nav.title
                    ? "text-white after:scale-x-100"
                    : "text-secondary after:scale-x-0"
                  }

  hover:text-white

  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-full
  after:bg-gradient-to-r after:from-yellow-400 after:to-pink-400
  after:origin-left
  after:transition-transform after:duration-300
  hover:after:scale-x-100
`}

                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
