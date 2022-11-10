import { FaArrowDown } from "react-icons/fa"
import "./Home.css"
function Landing() {
  return (
    <div id="landing">
      <div className="landing-image">
        <img src="Clouds logo.png" alt="Clouds logo" />
      </div>
      <div className="landing-content">
        <h1>CLOUDS</h1>
        <h2>Full form of CLOUDS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus
          tenetur unde quisquam sunt est fugiat esse, vel ea cumque soluta quae
          libero, error quia ipsam officiis, culpa excepturi modi?
        </p>
      </div>
      <div className="scroll-down">
        <FaArrowDown color="black" size="1.5rem" />
      </div>
    </div>
  )
}

export default Landing
