import React from 'react';
import {FiChevronRight} from "react-icons/fi";

import TM from './images/tm-logo.jpg';
import logout from './images/logout.png'
import '../../components/reset.css'
import styles from './Sidebar.module.css'

const Sidebar = ({props}) => {
    const {
        sidebarClosed,
        setSidebarClosed,
        mainPartClosed,
        setMainPartClosed,
        wrapperClosed,
        setWrapperClosed,
    } = props;

    const handleButtonClick = () => {
        setSidebarClosed(!sidebarClosed);
        setMainPartClosed(!mainPartClosed);
        setWrapperClosed(!wrapperClosed);
    };

    return (
        <>
            <div className={`${styles.sidebar} ${sidebarClosed ? `${styles.close}` : ''}`}>
                <FiChevronRight
                    onClick={handleButtonClick}
                    className={styles.chevronRight}
                />
                <div className={styles.userDetails}>
                    <div className={styles.userPhoto}>
                        <img src={TM} alt="user`s photo"/>
                    </div>
                    <div className={styles.userName}>
                        Marichka Tanechnyk
                    </div>
                </div>
                {/*<Link to='/sign-up'>sign-up*/}
                    <div className={styles.logoutContainer}>
                        <img src={logout} alt="Log out icon"/>
                        <button className={styles.logout}>Log out</button>
                    </div>
                {/*</Link>*/}
            </div>

        </>
    );
};

export default Sidebar;