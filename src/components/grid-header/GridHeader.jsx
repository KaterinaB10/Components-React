import "./gridHeader.css";
import imageOne from "../../assets/images/1.jpg";
import imageTwo from "../../assets/images/2.jpg";
import imageThree from "../../assets/images/3.jpg";
import imageFour from "../../assets/images/4.jpg";

export function GridHeder() {
  return (
    <div className="card-image-content-container">
      <div className="image-container one">
        <img className="card-img" src={imageThree} />
      </div>
      <div className="image-container two">
        <img className="card-img" src={imageOne} />
      </div>
      <div className="image-container three">
        <img className="card-img" src={imageTwo} />
      </div>
      <div className="image-container four">
        <img className="card-img" src={imageFour} />
      </div>
    </div>
  );
}
