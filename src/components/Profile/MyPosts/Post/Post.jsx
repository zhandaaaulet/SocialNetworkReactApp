import './Post.module.css';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://static01.nyt.com/images/2021/01/19/sports/00ufc-mcgregor/00ufc-mcgregor-articleLarge.jpg?quality=75&auto=webp&disable=upscale'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;
