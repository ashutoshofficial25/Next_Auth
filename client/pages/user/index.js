import { useContext } from "react";
import { Context } from "../../context";
import UserRoutes from "../../components/routes/UserRoutes";

const userProfile = () => {
  const { state } = useContext(Context);
  const { user } = state;

  return (
    <UserRoutes>
      <h2 className="text-center bg-success p-5">{JSON.stringify(user)}</h2>
    </UserRoutes>
  );
};

export default userProfile;
