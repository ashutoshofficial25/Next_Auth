import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    const data = await axios.get("/api/logout");
    toast.success(data.data.message);
    router.push("/login");
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href="/">
          <a>App</a>
        </Link>
      </Item>

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

      <Item onClick={logout} icon={<LogoutOutlined />} className="float-right">
        Logout
      </Item>
    </Menu>
  );
};

export default TopNav;
