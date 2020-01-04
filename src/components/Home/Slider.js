import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from '../../core/Box';
import Text from '../../core/Text';
import Heading from '../../core/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from '../../common/UI/Container';
import SliderWrapper from './featureSlider.style';
import Image1 from '../../images/mask_1.png';
import Image2 from '../../images/mask_2.png';

const images = [
    {
        original: `${Image1}`,
        originalAlt: 'slide one',
    },
    {
        original: `${Image2}`,
        originalAlt: 'slide two',
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
                        showNav={false}
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
        fontSize: ['22px', '26px', '26px', '30px', '36px'],
        fontWeight: '600',
        color: '#15172C',
        lineHeight: '1.34',
        mb: ['15px', '18px', '18px', '20px', '30px'],
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    secDescription: {
        fontSize: ['15px', '16px'],
        fontWeight: '400',
        color: '#15172C',
        lineHeight: '1.5',
        mb: '0',
        textAlign: 'center',
        width: '300px',
        maxWidth: '100%',
        ml: 'auto',
        mr: 'auto',
        fontFamily: 'Lato',
    },
};

export default FeatureSlider;
