import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../core/Box';
import Container from '../../common/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './testimonial.style';
import data from '../../data/TestimonialSlider';
import SliderDes from '../sliderDescription';
import Image1 from '../../images/1.png';

const images = [
    {
        thumbnail: `${Image1}`,
        description: <SliderDes data={data.testimonials[0]} />,
    },
    {
        thumbnail: `${Image1}`,
        description: <SliderDes data={data.testimonials[1]} />,
    },
    {
        thumbnail: `${Image1}`,
        description: <SliderDes data={data.testimonials[2]} />,
    },
    {
        thumbnail: `${Image1}`,
        description: <SliderDes data={data.testimonials[3]} />,
    },
    {
        thumbnail: `${Image1}`,
        description: <SliderDes data={data.testimonials[4]} />,
    },
];

const TestimonialSection = ({ sectionWrapper, row, sectionSubTitle }) => {
    return (
        <Box
            {...sectionWrapper}
            className="testimonialSlider"
            id="testimonialSection"
        >
            <Container>
                <Box className="testimonialDesWrapper">
                    <ImageGallery
                        items={images}
                        originalClass="Testimonial-img"
                        showPlayButton={false}
                        showFullscreenButton={false}
                    />
                </Box>
            </Container>
        </Box>
    );
};

TestimonialSection.propTypes = {
    sectionWrapper: PropTypes.object,
    title: PropTypes.object,
};

TestimonialSection.defaultProps = {
    sectionWrapper: {
        as: 'section',
        pt: '0px',
        pb: ['20px', '80px', '0px', '80px', '80px'],
    },

    sectionSubTitle: {
        content: 'CLIENT TESTIMONIAL',
        as: 'span',
        display: 'block',
        textAlign: ['center', 'left'],
        fontSize: '14px',
        letterSpacing: '0.11em',
        fontWeight: '700',
        color: '#1a73e8',
        textTransform: 'uppercase',
        mb: '10px',
    },
};

export default TestimonialSection;