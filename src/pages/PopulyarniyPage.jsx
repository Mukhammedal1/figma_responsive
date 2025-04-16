import React from "react";

import Catalog from "../components/catalog";
import {
  CatalogPageWrapper,
  ContentPopulyarniyWrapper,
  ContentSideWrapper,
  PopulyarniyPageWrapper,
  SliderCatalogWrapper,
  SwriperSlideCustom,
  TopSideWrapper,
} from "../styles/homePage.styles";
import { SliderWrapper } from "../app/Main/Main.styles";

import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Populyarniy from "../components/populyarniy/populyarniy";

function PopulyarniyPage() {
  return (
    <>
      <PopulyarniyPageWrapper className="container">
        <TopSideWrapper>
          <h2 className="catalogTitle">Популярные товары</h2>
          <button className="button1">
            Все товары <img src="/arrowIcon.svg" alt="Arrow Icon" />
          </button>
        </TopSideWrapper>
        <ContentPopulyarniyWrapper>
          <Populyarniy />
          <Populyarniy />
          <Populyarniy />
          <Populyarniy />
          <Populyarniy />
          <Populyarniy />
          <Populyarniy />
          <Populyarniy />
          {/* <Catalog path="cat1" name="Люстры" />
          <Catalog path="cat2" name="Светильники" />
          <Catalog path="cat3" name="Бра" />
          <Catalog path="cat4" name="Торшеры" />
          <Catalog path="cat5" name="Настольные лампы" />
          <Catalog path="cat6" name="Споты" /> */}
        </ContentPopulyarniyWrapper>
      </PopulyarniyPageWrapper>
      <SliderCatalogWrapper>
        <h2 className="catalogTitle">Каталог</h2>

        <Swiper
          slidesPerView={2}
          modules={[Pagination]}
          pagination={{ clickable: true, bulletActiveClass: "my-bullet" }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwriperSlideCustom>
            <Catalog path="cat1" name="Люстры" />
          </SwriperSlideCustom>
          <SwriperSlideCustom>
            <Catalog path="cat2" name="Светильники" />
          </SwriperSlideCustom>
          <SwriperSlideCustom>
            <Catalog path="cat3" name="Бра" />
          </SwriperSlideCustom>
          <SwriperSlideCustom>
            <Catalog path="cat4" name="Торшеры" />
          </SwriperSlideCustom>
          <SwriperSlideCustom>
            <Catalog path="cat5" name="Настольные лампы" />
          </SwriperSlideCustom>
          <SwriperSlideCustom>
            <Catalog path="cat6" name="Споты" />
          </SwriperSlideCustom>
          <button className="button1">
            Весь каталог <img src="/arrowIcon.svg" alt="Arrow Icon" />
          </button>
        </Swiper>
      </SliderCatalogWrapper>
    </>
  );
}

export default PopulyarniyPage;
