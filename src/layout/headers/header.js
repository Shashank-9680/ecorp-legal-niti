import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { window } from "browser-monads"
import { Link as SinglePageLink } from "react-scroll"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useLocation } from "@reach/router"
// internal
import OffCanvas from "../../components/common/off-canvas"
import ConnectModal from "../../components/common/modals/connect-modal"
import useSticky from "../../hooks/use-sticky"
import { menu_data } from "../../data/menu_data"

import logo from "../../../public/assets/img/logo/logo.png"
const Header = () => {
  const { pathname } = useLocation()

  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    setActiveSubMenu(null) // Reset activeSubMenu whenever pathname changes
  }, [pathname])

  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.classList.add("mobile-menu-visible")
    } else {
      window.document.body.classList.remove("mobile-menu-visible")
    }
  }, [isSidebarOpen])

  const handleClick = () => {
    setIsSidebarOpen(true)
  }

  return (
    <header>
      <div id="sticky-header" className="tg-header__area transparent-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={handleClick} className="mobile-nav-toggler">
                <i className="flaticon-menu-1"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link to="/" className="light-logo">
                      <img src={logo} alt="Nerko" />
                      {/* <h1>Legal Niti</h1> */}
                    </Link>
                    <Link to="/" className="dark-logo">
                      <img src="/assets/img/logo/nerko-dark.svg" alt="Nerko" />
                    </Link>
                  </div>
                  {/* <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {menu_data.map((menu, i) => (
                        <React.Fragment key={i}>
                          {menu.hasDropdown ? (
                            <li
                              className={`menu-item-has-children ${
                                activeSubMenu === i ? "active" : ""
                              }`}
                              onMouseEnter={() => setActiveSubMenu(i)}
                              onMouseLeave={() => setActiveSubMenu(null)}
                            >
                              <Link
                                to={menu.link}
                                className={
                                  pathname === "/" && menu.link === "/"
                                    ? ""
                                    : pathname.startsWith(menu.link)
                                    ? "active"
                                    : ""
                                }
                              >
                                {menu.title}
                              </Link>
                              <ul className="sub-menu">
                                {menu.submenus.map((sub, j) => (
                                  <li key={j}>
                                    <Link
                                      to={sub.link}
                                      className={
                                        pathname === sub.link ? "active" : ""
                                      }
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li
                              className={
                                pathname.startsWith(menu.link) ||
                                (pathname === "/" && menu.link === "/")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to={menu.link}>{menu.title}</Link>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div> */}
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {menu_data.map((menu, i) => (
                        <React.Fragment key={i}>
                          {menu.hasDropdown ? (
                            <li
                              className={`menu-item-has-children ${
                                activeSubMenu === i ? "active" : ""
                              }`}
                              onMouseEnter={() => setActiveSubMenu(i)}
                              onMouseLeave={() => setActiveSubMenu(null)}
                            >
                              <Link
                                to={menu.link}
                                className={
                                  (pathname === "/" && menu.link === "/") ||
                                  pathname.startsWith(menu.link)
                                    ? "active"
                                    : ""
                                }
                              >
                                {menu.title}
                              </Link>
                              <ul className="sub-menu">
                                {menu.submenus.map((sub, j) => (
                                  <li key={j}>
                                    <Link
                                      to={sub.link}
                                      className={
                                        pathname === sub.link ? "active" : ""
                                      }
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li
                              className={
                                (pathname.startsWith(menu.link) ||
                                  (pathname === "/" && menu.link === "/")) &&
                                menu.link !== "/"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to={menu.link}
                                className={pathname === "/" ? "active" : ""}
                              >
                                {menu.title}
                              </Link>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>

                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-social">
                        <a href="#" className="d-none d-sm-block">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          {/* <i className="fab fa-discord"></i> */}
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                          {/* <i className="fab fa-discord"></i> */}
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="header-btn">
                        <button
                          className="btn border-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#connectModal"
                        >
                          Sign in
                        </button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* <!-- Mobile Menu  --> */}
              <OffCanvas setIsSidebarOpen={setIsSidebarOpen} data_1={true} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Connect Wallet Modal --> */}
      <ConnectModal />
      {/* <!-- Connect Wallet Modal --> */}
    </header>
  )
}

export default Header
