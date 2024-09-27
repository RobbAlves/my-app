import React from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

export default function Share({changeState}) {
  return (
    <div className='share' >

        <div className="shareWrapper">
            <div className="shareTop">
            <img className='shareProfileImage' src={"/assets/person/wats.1.jpeg"} alt="" />
            <div className="shareInputCont"></div>
            <input placeholder="O que está pensando, Robson?"  onClick={changeState} className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareButtom">
             <div className="shareOptions">
             <div className="shareOption">
                    <VideoCameraBackIcon htmlColor='red' className='shareIcon'/>
                    <span className="shareOptionLongText">
                        Live video
                    </span>
                    <span className="shareOptionText">
                        Live
                    </span>
                </div>
                <div className="shareOption">
                    <PermMediaIcon htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionLongText">
                        Foto/video
                    </span>
                    <span className="shareOptionText">
                        Galeria
                    </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='orange' className='shareIcon'/>
                    <span className="shareOptionLongText">
                    Sentimento/Atividade
                    </span>
                    <span className="shareOptionText">
                    Sentir
                    </span>
                </div>
             </div>
            </div> 
             </div>

    </div>
  )
}