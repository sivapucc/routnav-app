import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Courses from "./Courses";
import Base from "./Base";

function Displayroutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="routenav.netlify.app/home"
            element={
              <Base>
                <Home />
              </Base>
            }
          />
          <Route
            path="/login"
            element={
              <Base>
                <Login />
              </Base>
            }
          />
          <Route
            path="/courses"
            element={
              <Base>
                <Courses />
              </Base>
            }
          />
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "red" }}>page not found.</h1>
                <Link to={"/home"}>click back to home</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Displayroutes;
