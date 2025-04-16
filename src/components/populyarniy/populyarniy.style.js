import styled from "styled-components";

export const PopulyarniySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 395px;
  /* border: 1px solid black; */

  .img {
    width: 173;
    height: 216px;
    margin-bottom:5px;
  }

  .title {
    width: 227px;
    height: 44px;
    font-size: 20px;
    line-height: 110%;
    color: #454545;
    margin-bottom: 8px;
  }

  .price {
    font-size: 20px;
    color: #454545;
    margin-top: 8px;
  }
`;
