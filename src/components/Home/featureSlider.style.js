import styled from 'styled-components';
// import Mockup from '../../images/mobile1.png';

const FeatureSliderWrapper = styled.div`
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
  @media (max-width: 1680px) {
    padding-bottom: 200px;
    
  }
  @media (max-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 240px;
  }
  @media (max-width: 1024px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
  @media (max-width: 990px) {
    padding-bottom: 140px;
  }
  .container {
    max-width: 100% !important;
    padding: 0;
  }
  .FeatureSlider {
    position: relative;
    display: flex;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    /* @media (max-width: 1680px) {
      background-position: bottom;
    }
    @media (max-width: 1440px) {
      background-position: bottom;
    }
    @media (max-width: 1024px) {
      background-image: none;
      height: 100%;
    }
    @media (max-width: 990px) {
      background-position: center;
    }
    @media (max-width: 480px) {
      background-image: none;
    } */
    .image-gallery {
      position: relative;
      z-index: 2;
      margin: 0 auto -60px;
    }

    .image-gallery-slide-wrapper {
      width: 1920px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      height: 729px;
      @media (max-width: 1680px) {
      width: 1680px;
      height: auto;

      }
      @media (max-width: 1440px) {
      width: 1440px;
      height: auto;
      }
      @media (max-width: 1024px) {
      width: 1024px;
      height: auto;
      }
      @media (max-width: 990px) {
        width: 250px;
        height: 505px;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:after {
        content: '';
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 68px rgba(42, 26, 142, 0.2);
        display: block;
        position: absolute;
        /* border-radius: 50px; */
      }
      .image-gallery-swipe {
        padding: 19px 15px 16px 19px;
        overflow: hidden;
        height: 100%;
        @media (max-width: 990px) {
          padding: 9px 6px 8px 6px;
        }
        .image-gallery-slides {
          height: 100%;
          /* border-radius: 20px; */
          @media (max-width: 990px) {
            border-radius: 40px;
          }
        }
      }
    }

    .image-gallery-bullets {
      bottom: auto;
      margin: 0;
      position: absolute;
      width: 100%;
      z-index: 4;
      top: auto;
      bottom: -70px;
      left: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      .image-gallery-bullets-container {
        margin: 0;
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: row;
        .image-gallery-bullet {
          padding: 0;
          margin: 0;
          margin-right: 15px;
          transition: all 0.3s ease;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          top: 50%;
          left: 0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
          z-index: 1;
          background: #fff;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background: #f3f2fb;
            -webkit-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
          }
          &.active {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            background: #fff;
            width: 13px;
            height: 13px;
            &::after {
              background-color: var(--primaryColor);
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
    .image-gallery-thumbnails {
      display: none;
    }
  }

  .image-gallery-left-nav {
    margin-left: 20px;
  }
  .image-gallery-right-nav {
    margin-right: 20px;
  }
  .image-gallery-left-nav 
  .image-gallery-svg, 
  .image-gallery-right-nav 
  .image-gallery-svg {
    height: 90px;
    width: 45px;
    padding: 5px
}
`;
export default FeatureSliderWrapper;
