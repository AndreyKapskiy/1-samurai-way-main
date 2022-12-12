import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img alt="net" src="https://01.img.avito.st/640x480/7950872701.jpg"/>
            </div>
            <div>
                ava + discr
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;