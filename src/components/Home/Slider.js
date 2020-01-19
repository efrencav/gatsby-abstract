import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from '../../core/Box';
import Text from '../../core/Text';
import Heading from '../../core/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
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
                <Box {...secTitleWrapper}>
                    <Heading {...secTitle} content="WORKS" />
                    <Text {...secDescription} content="just choose the destination" />
                </Box>
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

// FeatureSlider default style
FeatureSlider.defaultProps = {
    secTitleWrapper: {
        mb: ['65px', '65px', '70px', '70px', '70px'],
    },
    secTitle: {
        fontSize: '16px',
        fontWeight: '600',
        textTransform: 'uppercase',
        background: 'var(--primaryColor)',
        display: 'inline-block',
        verticalAlign: 'top',
        color: "var(--mainWhite)",
        lineHeight: '1.125',
        padding: '4px 6px 2px',
        marginBottom: '20px',
        textAlign: 'center',
        ml: 'auto',
    },
    secDescription: {
        fontSize: ['15px', '16px'],
        fontWeight: '400',
        color: "var(--darkGrey)",
        lineHeight: '1.5',
        mb: '0',
        textAlign: 'center',
        width: '300px',
        maxWidth: '100%',
        ml: 'auto',
        mr: 'auto',
        // fontFamily: 'Lato',
    },
};

export default FeatureSlider;

// font-size: 16px;
// line-height: 1.125;
// text-transform: uppercase;
// font-weight: 600;
// background: var(--primaryColor);
// display: inline-block;
// vertical-align: top;
// color: var(--mainWhite);
// padding: 4px 6px 2px;
// margin-bottom: 20px;