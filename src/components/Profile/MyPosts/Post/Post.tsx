import React from 'react';
import s from "./Post.module.css";

type PostsPropsType = {
    message: string
    likesCount: number
}

const Posts = (props: PostsPropsType) => {
    return (


        <div className={s.item}>
            <img alt="net" src="https://www.mycharm.ru/data/cache/2020aug/13/34/526707_63570-160x120x.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>


    );
}

export default Posts;