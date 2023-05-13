import React, { useState } from "react";
import { Link } from "gatsby";

const MobileMenus = ({ menuItems, setIsSidebarOpen }) => {
  const [navTitle, setNavTitle] = useState("")

  const openMobileMenu = menu => {
    if (navTitle === menu) {
      setNavTitle("")
    } else {
      setNavTitle(menu)
    }
  }

  return (
    <nav>
      <ul className="navigation">
        {menuItems?.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.hasDropdown && (
              <li className="active menu-item-has-children">
                <Link onClick={() => openMobileMenu(menu.title)} to={menu.link}>
                  {menu.title}
                </Link>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.submenus.map((sub, i) => (
                    <li key={i}>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        to={sub.link}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {!menu.hasDropdown && (
              <li>
                <Link
                  onClick={() => setIsSidebarOpen(false)}
                  to={menu.link}
                  className="section-link"
                >
                  {menu.title}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenus
