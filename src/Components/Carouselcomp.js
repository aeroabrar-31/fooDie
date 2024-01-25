import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imgURL } from "../Config/constants";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carouselcomp = (props) => {
  console.log(props);
  console.log(props?.props[0]?.action?.text);
  const arr = props.props.map((obj) => {
    const temp = { link: obj.imageId, text: obj.action.text };

    return temp;
  });
  console.log(arr);
  return (
    <div className="carousel">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
      >
        {arr.map((obj) => {
          return (
            <div key={obj.link}>
              <img src={imgURL + obj.link}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carouselcomp;
