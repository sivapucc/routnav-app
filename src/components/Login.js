import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div className="login-container conatiner">
      <div className="row">
        <div className="col-md-6 colone">
          <div className="row-first">
            <img
              src="https://www.guvi.in/web-build/images/guvi-logo.8eeef9e2027d374479531095b012a87e.svg"
              alt=""
            />
            <h1>
              Get Codified with our <span>New Features!</span>
            </h1>
            <div className="ulcontainer">
              <ul>
                <li>
                  <i className="fa-solid fa-shapes"></i>Codekata
                </li>
                <li>
                  <i className="fa-solid fa-angle-left"></i>
                  <i className="fa-solid fa-angle-right"></i>IDE
                </li>
                <li>
                  <i class="fa-solid fa-gift"></i>Rewards
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa-regular fa-window-maximize"></i>Webkata
                </li>
                <li>
                  <i className="fa-solid fa-bullhorn"></i> Referal
                </li>
                <li>
                  <i className="fa-solid fa-bug"></i> Debugging
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 coltwo">
          <h1>Login</h1>
          <p>
            Don't have account? <a href="">SignUp</a>
          </p>
          <div className="googlebtn">
            <Button variant="secondary" size="sm">
              <i class="fa-brands fa-google"></i> SignUp with google
            </Button>
          </div>
          <hr className="line-hr" />
          <span className="lable-span">or Login with Email</span>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" size="lg">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
