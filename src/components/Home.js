import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  let data = [
    {
      imglink:
        "https://www.guvi.in/web-build/images/aicte-logo-svg.022fe6d09f00ecfa3eeee0f6373b0da9.svg",
    },
    {
      imglink:
        "https://www.guvi.in/web-build/images/google-partner-logo.73f8c051dd220d6550f4e972ee738364.svg",
    },
    {
      imglink:
        "https://www.guvi.in/web-build/images/iitm-logo.be4b1c6789aaede4ea7e5a8946890384.svg",
    },
    {
      imglink:
        "https://www.guvi.in/web-build/images/nsdc-logo-svg.effe9819ee8a5e45001673f8190da0b5.svg",
    },
    {
      imglink:
        "https://www.guvi.in/web-build/images/naan-muthalvan-logo.da77ba3b0f4466d9953374854f42f774.svg",
    },
  ];

  return (
    <div className="main-container">
      <main>
        <img
          src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.30808-6/430123847_886508056818862_8983862973917551115_n.png?stp=dst-png_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Mhu0potD8TMAX9iH0-a&_nc_ht=scontent.fmaa1-1.fna&oh=00_AfAwaTYQmhNrGr5i-0SZNL7HocRXh1jJ_Knfe3yUiEHddw&oe=65F6D436"
          alt="banner"
        />
      </main>
      <footer>
        <h3>We are accredited by</h3>
        <div className="footer-banner">
          {data.map((ele, idx) => (
            <img src={ele.imglink} alt={idx} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Home;
