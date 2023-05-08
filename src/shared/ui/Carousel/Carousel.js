import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel as RCarousel} from 'react-responsive-carousel'
import PropTypes from "prop-types";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cls from './Carousel.module.scss'
import classNames from "classnames";
import {useWindowDimensions} from "../../lib/hooks/useWindowDimensions";
import {useCallback} from "react";

export const Carousel = (props) => {
  const {images, ...rest} = props
  const {isSmallScreen} = useWindowDimensions()

  const renderArrowPrev = useCallback((clickHandler) =>
    <div
      onClick={clickHandler}
      className={classNames(cls.arrowStyles, {}, [cls.arrowLeft])}
    >
      <FontAwesomeIcon
        size={isSmallScreen ? '1x' : '2x'}
        icon={faCaretLeft}
        color={'white'}
      />
    </div>, [isSmallScreen]);

  const renderArrowNext = useCallback((clickHandler) =>
    <div
      onClick={clickHandler}
      className={classNames(cls.arrowStyles, {}, [cls.arrowRight])}
    >
      <FontAwesomeIcon
        size={isSmallScreen ? '1x' : '2x'}
        icon={faCaretRight}
        color={'white'}
      />
    </div>, [isSmallScreen])

  return (
    <RCarousel
      {...rest}
      autoFocus
      showThumbs={false}
      infiniteLoop
      animationHandler={isSmallScreen ? 'slide' : 'fade'}
      showStatus={false}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt="carousel_img" className={cls.img}/>
        </div>
      ))}
    </RCarousel>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}
