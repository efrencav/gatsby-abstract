import React from 'react';
// import { Link } from 'gatsby';
// import links from '../../constants/aboutLinks';
import styles from '../../css/about.module.css'

// import '../../css/bootstrap.min.css';

export const descriptionSection = () => {
    return (
        <div className={styles.cards_block}>
            <div className={styles.cards_block__head}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <div className={styles.zoom_counter__subtitle_black}>About Us</div>
                            <div className={styles.cards_block__title}>
                                We are idea-driven, working with a strong focus on design and
                                user experience.
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-xl-1">
                            <div className={styles.cards_block__text}>
                                We collaborate with businesses to capture stories, elevate brands, and attract the attention of target audiences with impactful design. Our team works with your organization to develop strategies to spark growth and create results.
                            </div>
                            <span className={styles.hr_short}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default descriptionSection;
