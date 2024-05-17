import "./HomePage.css"
import decetralized from "../../assets/decetralizedLogo.jpeg"

const HomePage = () => {
  return (
    <div className="decentralied">
      <div className="hero">
        <h1>
          <span>Decentralized review,</span> reputation system.{" "}
        </h1>
        <p>
        A decentralised reputation system can achieve security through the implementation of blockchain technology
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume"> Resume</div>
        </div>
      </div>
      <img className="img" src={decetralized} alt="" />
      <div>

      </div>

    </div>
  )
}

export default HomePage