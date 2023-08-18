import React, { useState } from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Header = styled.h1`
  color: white;
  font-weight: 600;
  font-family: "DM Sans", sans-serif;
  @media (max-width: 768px) {
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 32px;
  border: none;
  margin-left: 5px;
  @media (max-width: 768px) {
    margin-left: 20px;
    width: calc(70% - 20px);
    margin-bottom: 10px;
  }
`;

const IconButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Home = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/weather", {
      state: { city, state },
    });
  };

  return (
    <Container>
      <Header>Weather App</Header>

      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={city}
          placeholder="Enter Your City"
          style={{
            paddingLeft: "20px",
          }}
          onChange={(e) => setCity(e.target.value)}
        />
        <StyledInput
          type="text"
          value={state}
          placeholder="Enter Your State"
          style={{
            paddingLeft: "20px",
          }}
          onChange={(e) => setState(e.target.value)}
        />
        <IconButtonContainer>
          <IconButton type="submit">
            <NearMeIcon />
          </IconButton>
        </IconButtonContainer>
      </StyledForm>
    </Container>
  );
};

export default Home;
