import { useContext, useState } from "react";
import { Context } from "../../context";
import UserRoutes from "../../components/routes/UserRoutes";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { UserOutlined, CameraOutlined } from "@ant-design/icons";
import { Container } from "@mui/system";

const userProfile = () => {
  const { state } = useContext(Context);
  const { user } = state;
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: user?.name,
    email: user?.email,
  });

  const updateDp = (e) => {
    const file = e.target.files[0];

    console.log(file?.name);
    setLoading(true);
    if (!file) {
      setLoading(false);
      return false;
    }
    if (!file.name.match(/\.(jpg||jpeg||png)$/)) {
      setLoading(false);
      return false;
    }
    // api to update

    // avatarPic(currentUser.user, file, config).then((result) => {
    //   //console.log(result);
    //   dispatch(updateAvatar(result));
    //   setLoading(false);
    // });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.name, input.email);
  };

  return (
    <UserRoutes>
      <h2 className="text-center bg-success p-5">{JSON.stringify(user)}</h2>
      <Container>
        {user && (
          <Card elevation={10} className="user-profile">
            <input
              type="file"
              style={{ display: "none" }}
              id="contained-button-file"
              onChange={updateDp}
            />
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              textAlign="center"
            >
              <label htmlFor="contained-button-file">
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={
                    <CameraOutlined
                      htmlFor="contained-button-file"
                      style={{
                        color: "#ff9901",
                        fontSize: "24px",
                        position: "absolute",
                        top: "125px",
                        left: "105px",
                      }}
                    />
                  }
                >
                  <Avatar
                    htmlFor="contained-button-file"
                    className="userDp"
                    alt={user.name}
                    sx={{ width: 150, height: 150 }}
                    src={user.picture ? user.picture : <UserOutlined />}
                  />
                </Badge>
              </label>
            </Box>
            <br />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  id="name"
                  label="Your Name"
                  name="name"
                  onChange={handleChange}
                  defaultValue={user.name}
                  value={input.name}
                  variant="standard"
                />
                <br />
                <br />

                <TextField
                  required
                  id="email"
                  label="Your Email"
                  name="email"
                  value={input.email}
                  defaultValue={user.email}
                  onChange={handleChange}
                  variant="standard"
                />
                <br />
                <br />
                <Button variant="contained" type="submit" fullWidth>
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
