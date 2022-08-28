import { Button, Typography } from "antd";
import { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import TodoPage from "./todos";

const Index = () => {
  const { Text, Link } = Typography;
  const { state } = useContext(Context);
  const { user } = state;
  const router = useRouter();

  const handleTarget = () => {
    if (user != null) {
      router.push("/todos");
    } else {
      router.push("/login");
      toast("You must login first! 🙂");
    }
  };

  return (
    <main className="main-container">
      <div className="hero-container">
        <div className="hero-layout">
          <div className="text-center">
            {" "}
            <img
              className="image-logo"
              src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
              alt="logo"
            />{" "}
          </div>
          <Link className="h3">
            This is a Todo App which magages your all tasks
          </Link>
          <div className="action-buttons p-3">
            <Button
              onClick={handleTarget}
              type="primary"
              size="large"
              className="left-btn"
            >
              Set Target
            </Button>
            <Button type="primary" size="large" ghost>
              Start Doing
            </Button>
          </div>
        </div>
      </div>
      <div className="recent-todo">{user && <TodoPage />}</div>
    </main>
  );
};

export default Index;
