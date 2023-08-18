import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "DM Sans", sans-serif;
  color: white;
`;
const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const Button = styled.button`
  border: 1px solid white;
  background: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(89, 60, 255, 0.2);
  }
`;

const CardContainer = styled.div`
  max-width: 200px;
  height: 250px;
  background-color: rgba(61, 83, 125, 0.35);
  border-radius: 10px;
  -webkit-box-shadow: 6px 4px 7px 1px rgba(0, 0, 0, 0.76);
  box-shadow: 6px 4px 7px 1px rgba(0, 0, 0, 0.76);
  width: calc(20% - 20px);
  margin: 10px;
  float: left;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;
const DayHeading = styled.h2`
  font-family: "DM Sans", sans-serif;
  color: white;
  font-weight: 500;
  font-size: 24px;
`;

const Temperature = styled.p`
  font-family: "DM Sans", sans-serif;
  color: white;
  font-size: 36px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const PeakTemp = styled.p`
  font-family: "DM Sans", sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
const IconContainer = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = ({ weatherData }) => {
  const navigate = useNavigate();
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  };

  return (
    <div>
      <MainHeading>15 Day Weather Forecast</MainHeading>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      </ButtonContainer>
      <MainContainer>
        {weatherData.map((weatherDay, idx) => (
          <CardContainer key={idx}>
            <InfoContainer>
              <DayHeading>{getDayOfWeek(weatherDay.datetime)}</DayHeading>
              <IconContainer>
                {weatherDay.icon ? (
                  <img
                    src={`./icons/${weatherDay.icon}.png`}
                    alt={weatherDay.icon}
                  />
                ) : (
                  <div>No icon available</div>
                )}
              </IconContainer>
              <Temperature>{Math.round(weatherDay.tempmax)}°F</Temperature>
              <PeakTemp>
                H: {Math.round(weatherDay.tempmax)}°F | L:{" "}
                {Math.round(weatherDay.tempmin)}°F
              </PeakTemp>
            </InfoContainer>
          </CardContainer>
        ))}
      </MainContainer>
    </div>
  );
};

export default WeatherCard;
