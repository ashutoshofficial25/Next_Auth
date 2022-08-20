import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";

const userProfile = () => {
  const { state } = useContext(Context);
  const [hidden, setHidden] = useState(true);
  const { user } = state;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/current-user");
        setHidden(false);
        console.log(data);
      } catch (error) {
        setHidden(true);
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {!hidden && (
        <h2 className="text-center bg-success p-5">{JSON.stringify(user)}</h2>
      )}
    </>
  );
};

export default userProfile;
