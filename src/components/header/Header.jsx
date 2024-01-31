import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Icon,
} from "semantic-ui-react";
import { UseSelector, useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isAuth, setIsAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [permission, setPermission] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isAuth);
  const userDetails = useSelector((state) => state.user.user);
  console.log(userDetails);
  const handleSignOut = () => {
    // Dispatch the logout action when signing out
    dispatch(logout());
  };

  const userDropdownOptions = [
    { key: "profile", text: "Profile", icon: "user" },
    { key: "settings", text: "Settings", icon: "cog" },
    {
      key: "signOut",
      text: "Sign Out",
      icon: "sign-out",
      onClick: handleSignOut,
    },
  ];
  const adminDropdownOptions = [
    { key: "profile", text: "Profile", icon: "user" },
    {
      key: "manager",
      text: "Manager",
      icon: "cog",
      as: Link,
      to: "/admin/manager",
    },
    {
      key: "signOut",
      text: "Sign Out",
      icon: "sign-out",
      onClick: handleSignOut,
    },
  ];
  console.log(user);
  useEffect(() => {
    if (userDetails?.permission) {
      setPermission(userDetails?.permission);
    }
  }, [userDetails]);
  const handleItemClick = (name) => {
    setActiveItem(name);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsAuth(user);
  }, [user]);
  const renderDropdownOptions = () => {
    return userDetails?.premission === "user" ? (
      <Dropdown
        item
        trigger={<Icon name="user" />}
        options={userDropdownOptions}
      />
    ) : (
      <Dropdown
        item
        trigger={<Icon name="user" />}
        options={adminDropdownOptions}
      />
    );
  };
  return (
    <Menu size="massive">
      <MenuItem
        name="Home"
        as={Link}
        to="/"
        active={activeItem === "Home"}
        onClick={() => handleItemClick("Home")}
      />

      <MenuItem
        name="About Us"
        as={Link}
        to="/aboutUs"
        active={activeItem === "About Us"}
        onClick={() => handleItemClick("About Us")}
      />
      <MenuItem
        name="Store"
        as={Link}
        to="/store"
        active={activeItem === "Store"}
        onClick={() => handleItemClick("Store")}
      />

      {isAuth ? (
        <>
          <Menu.Menu position="right">
            <MenuItem onClick={toggleMenu} as={Link} to="/cart">
              <Icon name="shopping cart" size="large" />
            </MenuItem>
            {renderDropdownOptions()}
          </Menu.Menu>
        </>
      ) : (
        <>
          <MenuMenu position="right">
            <MenuItem>
              <Button
                as={Link}
                to="/signIn"
                active={activeItem === "Sign In"}
                onClick={() => handleItemClick("Home")}
              >
                Sign In
              </Button>
            </MenuItem>

            <MenuItem>
              <Button
                primary
                as={Link}
                to="/signUp"
                active={activeItem === "Sign Up"}
                onClick={() => handleItemClick("Home")}
              >
                Sign Up
              </Button>
            </MenuItem>
          </MenuMenu>
        </>
      )}
    </Menu>
  );
}

export default Header;
