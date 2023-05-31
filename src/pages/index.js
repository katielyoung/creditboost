import React from "react";
import styled from "styled-components";
import home_pic from "../imgs/credit_score_boost.png";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
`;

const About = styled.p`
  font-size: 1em;
  text-align: center;
  color: #ffffff;
`;

const Home = () => {
  return (
    <div className="container">
      <Title>Build your credit score!</Title>
      <About>
        Unlock your financial potential with CreditBoost - the key to a brighter
        future!
      </About>
      <About>
        Elevate your credit score and soar towards limitless possibilities, all
        with the ease and security you deserve.
      </About>
      <img src={home_pic} alt="HomePic" />
    </div>
  );
};

export default Home;
