import React from 'react';
import styles from './Card.module.css'
const Card = ({img, name, year}: {img: string, name: string, year: number}) => (
    <div className={styles.Card}>
        <div className={styles.profile__img}>
            <img src={img} alt={'Profile'} />
        </div>
        <div className={styles.profile__details}>
            <h2>{name}</h2>
            <div>{year} years</div>
        </div>
    </div>
);

export default Card;
