import React from 'react';
// import { link } from 'gatsby';
import icons from '../../constants/featuredIcons';
import '../../css/icofont.min.css';
import styles from '../../css/about.module.css'
// import { fausers } from 'react-icons/fa';

export const featuredBlock = () => {
    return (
        <div className={styles.features_block}>
            <div className="container">
                <div className={styles.features_block__subtitle}>Why Choose Us</div>
                <div className={styles.features_block__title}>
                    What makes us different?
        </div>
                <div className={styles.features_block__text}>
                    Was likeness brought divided given fruit in wherein lights green hath
                    third bring let creeping. Third them firmament give green Creature
                    night first creature.
        </div>
                <div className="row">
                    {icons.map((item, index) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className={styles.features_block__item} key={index}></div>
                                <div className={styles.features_block__feature_icon}>{item.icon}</div>
                                <div className={styles.features_block__feature_title}>
                                    {item.title}
                                </div>
                                <div className={styles.features_block__feature_text}>{item.text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >
    );
};

export default featuredBlock;
