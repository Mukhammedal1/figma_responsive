import styled from "styled-components";
import { colors } from "@/styles/theme";
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
  margin-bottom: 100px;
  margin: 0 auto;
  max-width: 1700px;
  width: 100%;
  height: 500px;

  .swiper-pagination {
    right: 4% !important;
    left: auto;
    bottom: 40px !important;
    width: fit-content;

    @media (max-width: 768px) {
      right: 40% !important;
      top: 95% !important;
      margin-bottom: 40px;
    }
  }

  .my-bullet {
    background-color: red;
  }
`;

export const SwiperItemWrapper = styled.div`
  background-color: ${colors.light};
  border-radius: 50px;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 500px;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .swiper-main-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 588px;
      height: 348px;
      font-size: 64px;
      font-weight: 700;
      line-height: 130%;
    }
    span {
      background-color: #454545;
      width: 500px;
      color: white;
      border-radius: 60px;
      padding: 10px 30px;
      margin-top: 10px;
    }
    .lamp {
      width: 453px;
      height: 453px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      .lamp {
        width: 100%;
        height: 275px;
        object-fit: contain;
      }

      .swiper-main-title {
        width: 70%;
        height: 159px;
        font-size: 28px;
        margin: 0 auto;
      }

      span {
        width: 100%;
        padding: 10px 30px;
      }
    }
  }
`;

export const SwriperSlideCustom = styled(SwiperSlide)`
  padding: 0 20px;
`;
