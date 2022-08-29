import { useContext } from "react";
import { Context } from "../../context";
import UserRoutes from "../../components/routes/UserRoutes";
import { Avatar, Button, Card, CardContent, TextField } from "@mui/material";
import { UserOutlined } from "@ant-design/icons";
import { Container } from "@mui/system";

const userProfile = () => {
  const { state } = useContext(Context);
  const { user } = state;

  const updateDp = () => {
    console.log("update image");
  };

  return (
    <UserRoutes>
      <h2 className="text-center bg-success p-5">{JSON.stringify(user)}</h2>
      <Container>
        {user && (
          <Card elevation={10} className="user-profile">
            <Avatar
              className="userDp"
              alt={user.name}
              src={user.picture ? user.picture : <UserOutlined />}
              sx={{ width: 150, height: 150 }}
              onClick={updateDp}
            />
            <br />
            <CardContent>
              <form>
                <TextField
                  required
                  id="outlined-required"
                  label="Your Name"
                  defaultValue={user.name}
                  variant="standard"
                />
                <br />
                <br />

                <TextField
                  required
                  id="outlined-required"
                  label="Your Email"
                  defaultValue={user.email}
                  variant="standard"
                />
                <br />
                <br />
                <Button variant="contained" fullWidth>
                  Update
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </Container>
    </UserRoutes>
  );
};

export default userProfile;
