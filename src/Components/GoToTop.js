import styled from "@emotion/styled";
import { ArrowCircleUpRounded, ArrowUpward } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const listenToScroll = () => {
    let ht = 600;

    const wind = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(wind);

    if (wind > ht) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleGoTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    isVisible && (
      <Wrapper>
        <div className="top-btn" onClick={handleGoTop}>
          <ArrowUpward className="icon" fontSize="large" />
        </div>
      </Wrapper>
    )
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;

  .top-btn {
    background-color: rgba(237, 108, 2, 255);
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    // box-shadow: 0 0 15px 25px #48abe0;

    color: white;
    font-size: 3.4rem;
    bottom: 2rem;
    left: 30px;
    z-index: 999;
    display: flex;
    justify-content: center;
    text-align: center;
    position: fixed;
  }

  .icon {
    animation: gototop 1.2s linear infinite alternate-reverse;
  }

  @keyframes gototop {
    0% {
      transform: translateY(-0.1rem);
    }
    100% {
      transform: translateY(0.5rem);
    }
  }
`;

export default GoToTop;
