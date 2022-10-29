import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {type} from "@testing-library/user-event/dist/type";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let NewPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (<div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
            </div>
            <button onClick={ addPost }>Add post</button>
            <div className={s.posts}>My posts
                <div>New post</div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;