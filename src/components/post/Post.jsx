import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css';
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  
  const PF = "../assets/";

  
  const user = Users.find((u) => u.id === post.userId);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={user?.profilePicture}
              alt=""
            />
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImage" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <div style={{ display: 'flex' }}>
              <div className="likeIconCont">
                <img
                  className="likeIcon"
                  onClick={likeHandler}
                  src={`${PF}like.png`}
                  alt=""
                />
              </div>
              <div className="likeIconCont">
                <img
                  className="likeIcon"
                  onClick={likeHandler}
                  src={`${PF}heart.png`}
                  alt=""
                />
              </div>
            </div>
            <span className="postLikeCounter">{like} pessoas gostam</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comentarios} comentários</span>
          </div>
        </div>
      </div>
    </div>
  );
}
