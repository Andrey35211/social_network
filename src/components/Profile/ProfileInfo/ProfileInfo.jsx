import React from "react";
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    className={s.profilePhoto}
                    src='profilePhoto.png'
                    alt="avatar"></img>
            </div>
            <div className={s.descriptionBlock}>
                <p>Андрей Сергиенко</p>
            </div>
        </div>
    )
}

export default ProfileInfo;