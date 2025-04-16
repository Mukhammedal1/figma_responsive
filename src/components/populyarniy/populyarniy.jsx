import React from "react";
import {
  CatalogSectionWrapper,
  CatalogSliderWrapper,
} from "../../styles/homePage.styles";
import { PopulyarniySectionWrapper } from "./populyarniy.style";

function Populyarniy(props) {
  return (
    <>
      <PopulyarniySectionWrapper>
        <div>
          <img src="/catalog/svetilnik.png" alt="" />
          <p className="title">Встраиваемый светильник Novotech</p>
          <p>7000</p>
          <p className="price">6 399₽</p>
        </div>
      </PopulyarniySectionWrapper>
    </>
  );
}

export default Populyarniy;
