import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 35vw;
    max-height: 90vh;
    width: 100%;
    height: 100%;
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
  }

  .searchCircle {
    border: 1px solid grey;
    width: 30px; /* Adjust the width of the circle as needed */
    height: 30px; /* Ensure the height matches the width for a perfect circle */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 20px;
      color: grey;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
    text-align: center; /* Center align text for better aesthetics */

    > .icon {
      font-size: 5rem; /* Reduced font size to fit better within container */
    }

    > h1 {
      font-size: 2rem; /* Reduced font size to fit better within container */
      font-family: "Bebas Neue", sans-serif;
    }

    > span {
      margin-bottom: 10px;
      font-family: "Inter", sans-serif;
    }

    > h2 {
      font-size: 1.5rem; /* Reduced font size to fit better within container */
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: linear-gradient(90deg, rgba(243, 255, 253, 1) 0%, rgba(253, 255, 232, 1) 100%);
    border-radius: 12px;
    padding: 10px;
    width: 100%; /* Ensures the area spans the full width of the container */
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 2rem; /* Reduced font size to fit better within container */
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 10px;
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
    }

    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
