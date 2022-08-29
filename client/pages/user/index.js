import { useContext } from "react";
import { Context } from "../../context";
import UserRoutes from "../../components/routes/UserRoutes";
import { Card } from "@mui/material";

const userProfile = () => {
  const { state } = useContext(Context);
  const { user } = state;

  return (
    <UserRoutes>
      <h2 className="text-center bg-success p-5">{JSON.stringify(user)}</h2>
      {user && <Card></Card>}
    </UserRoutes>
  );
};

export default userProfile;
