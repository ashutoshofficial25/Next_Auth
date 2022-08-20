import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";

const UserRoutes = ({ children }) => {
  const [ok, setOk] = useState(false);
  const { router } = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/current-user");
        if (data.ok) setOk(true);
        console.log("JSON Verified");
      } catch (error) {
        setOk(true);
        console.log(error);
        router.push("/login");
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {ok ? (
        <>{children}</>
      ) : (
        <SyncOutlined
          spin
          className=" d-flex
          justify-content-center
          display-1
          text-primary
          p-5"
        />
      )}
    </>
  );
};

export default UserRoutes;
