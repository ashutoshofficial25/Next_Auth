import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  CoffeeOutlned,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { URL } from "../context/config";
const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    const data = await axios.get(`${URL}/api/logout`);
    toast(data.data.message);
    router.push("/login");
  };

  return (
    <Menu className="top-nav" mode="horizontal" selectedKeys={[current]}>
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined style={{ fontSize: "24px" }} />}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>
      <div className="top-nav">
        {user === null && (
          <>
            <Item
              key="/login"
              onClick={(e) => setCurrent(e.key)}
              icon={<LoginOutlined />}
            >
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Item>

            <Item
              key="/register"
              onClick={(e) => setCurrent(e.key)}
              icon={<UserAddOutlined />}
            >
              <Link href="/register">
                <a>Register</a>
              </Link>
            </Item>
          </>
        )}

        {user !== null && (
          <div className="user-nav">
            <Item
              onClick={logout}
              icon={<LogoutOutlined />}
              className="float-right"
            >
              Logout
            </Item>
            <Item>
              <Link href="/user">
                <a>User</a>
              </Link>
            </Item>
            <Item>
              <Link href="/todos">
                <a>Your Tasks</a>
              </Link>
            </Item>
          </div>
        )}
      </div>
    </Menu>
  );
};

export default TopNav;
