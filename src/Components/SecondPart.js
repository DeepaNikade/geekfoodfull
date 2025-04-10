import Button from "./Button";
import "./SecondPart.css";
// import { Button } from "./Button.js";

function SecondPart() {
  return (
    <div className="secondsection">
      <div className="secondcontent">
        <img
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
      </div>
      <div className="content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <Button
          padding="0.625rem 1rem"
          borderRadius="0.3rem"
          backgroundColor="blue"
          fontColor={"#FFFFFF"}
          hoverBackgroundColor="#ffffff"
          hoverColor="blue"
        >
          Get In Touch
        </Button>
      </div>
    </div>
  );
}

export default SecondPart;
