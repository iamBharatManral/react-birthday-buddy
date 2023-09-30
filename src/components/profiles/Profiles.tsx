import React from 'react';
import Card from "../UI/Card/Card";
import styles from './Profiles.module.css'
interface Profile {
    img: string;
    name: string;
    year: number;
}
const initialProfiles :Profile[] = [
    {name: 'Bertie Yates', img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg', year: 29},
    {name: 'Hester Hogan', img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg', year: 32},
    {name: 'Larry Little', img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg', year: 36},
    {name: 'Sean Walsh', img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg', year: 34},
    {name: 'Lola Gardner', img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg', year: 29}
]
const Profiles = () => {
    const [profiles, setProfiles] = React.useState(initialProfiles);
    return (
        <div className={styles.profiles}>
            <h2 className={styles.profile__heading}>{profiles.length} Birthdays Today</h2>
            {profiles.map((profile: Profile, index: number) => <Card key={index} {...profile}/>)}
            <button type={'button'} onClick={() => setProfiles([])}>Clear All</button>
        </div>
    )
}

export default Profiles;
