import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const SliderCatalogWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 30px;

  .swiper-pagination {
    right: 45% !important;
    left: auto;
    top: 92% !important;
    width: fit-content;
  }

  .my-bullet {
    background-color: red;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SwriperSlideCustom = styled(SwiperSlide)`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 0 20px;
  height: 270px;
`;

export const HomePageWrapper = styled.div`
  max-width: 1714px;
  margin: 0 auto;
  background-color: #f2f2f2;
  border-radius: 50px;
`;

export const CatalogPageWrapper = styled.div`
  color: var(--main-brown);
  max-width: 1316px;
  width: 100%;
  padding: 0 8px;
  margin: 50px auto;
  font-family: "Manrope", sans-serif;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TopSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ContentSideWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

export const CatalogSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 270px;
  background-color: #f2f2f2;
  border-radius: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CatalogSliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 5px 15px;

  .main_img {
    width: 90%;
    height: 170px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
