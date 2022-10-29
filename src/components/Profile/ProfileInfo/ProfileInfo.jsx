import React from "react";
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMtQZfmiU68G7fkPNeGOjnobh2BbjJO4w3Q&usqp=CAU'
                    alt="avatar"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;