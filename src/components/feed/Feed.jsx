import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";

import { Posts } from '../../dummyData';

export default function Feed({changeState}) {
 
  return (
    <div className="feed">
      <div className="feedWrapper">
      <Share  changeState={changeState}/>
      {Posts.map((p)=>(
               <Post key={p.id} post={p}/>
      ))}
      </div>
    </div>
  );
}