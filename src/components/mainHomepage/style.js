import styled from "styled-components";

export const ContainerMain = styled.div`
  background-color: white;
  height: 100vh;
  margin-top: 40px;

  .foot {
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent 27%, black 100%);
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    .foot {
      width: 50%;
    }
  }
`;

export const ContainerBtn = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;

  h1 {
    margin: 0;
    padding: 10px;
    font-size: 25px;
    width: 90%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    margin-top: 80px;
    align-items: flex-start;
    justify-content: space-around;
    section {
      align-items: flex-start;
      width: 30%;
    }

    h1 {
      width: 90%;
    }
  }
`;