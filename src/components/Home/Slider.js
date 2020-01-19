import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from '../../core/Box';
import Text from '../../core/Text';
import Heading from '../../core/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Title from "./serviceTitle"
import Container from '../../common/UI/Container';
import SliderWrapper from './featureSlider.style';
import Image1 from '../../images/featured-project-image-1.jpg';
import Image2 from '../../images/featured-project-image-2.jpg';
import Image3 from '../../images/featured-project-image-3.jpg';


const images = [
    {
        original: `${Image1}`,
        originalAlt: 'slide one',
    },
    {
        original: `${Image2}`,
        originalAlt: 'slide two',
    },
    {
        original: `${Image3}`,
        originalAlt: 'slide three',
    },
];

const FeatureSlider = ({ secTitleWrapper, secTitle, secDescription }) => {


    return (
        <SliderWrapper id="keyfeature">
            <div className="FeatureSliderInner">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Container noGutter mobileGutter width="100%" className="container">
                <Title title="our works" subtitle="" />
                <Box className="FeatureSlider">
                    <ImageGallery items={images} className="Slider-img"
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={true}
                        showBullets={true}
                        autoPlay={true}
                    />
                </Box>
            </Container>
        </SliderWrapper>
    );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
    secTitleWrapper: PropTypes.object,
    secTitle: PropTypes.object,
    secDescription: PropTypes.object,
};


export default FeatureSlider;
