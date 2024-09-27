import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">fchatSocial</h3>
                <div className="registerLeftDesc">
                Conecte-se com amigos e com o mundo <br /> ao seu redor no Fchatsocial.
                </div>
            </div>
            <div className="registerRight">
            <div className="registerBox">
            <form action="" className='registerForm'>
                    <div class="registerUsername">
                        <input className='registerInput' placeholder='Username' type="text" id="username-l"/>
                    </div>
                    <div class="registerEmail">
                        <input className='registerInput' placeholder='Email or Phone number' type="text" id="username-l"/>
                    </div>
                    <div class="registerPassword">
                        <input className='registerInput' placeholder='Password' type="password" id="password-R"/>
                    </div>
                    <div class="registerPassword">
                        <input className='registerInput' placeholder='Retype-password' type="password" id="re-Password-R"/>
                    </div>
                    <div class="registerSubmit">
                        <input id='registerBtn' type="submit" value="Sign Up"/>
                    </div>
                    <hr className="registerHr" />
                    <div class="registerLoginAc">
                    
                        <label for="reg-btn">
                                <Link  style={{textDecoration:'none'}} to="/login">
                        <span >Já tem uma conta?</span>
                        </Link>
                        </label>       
                        </div>
                </form>
            </div>
            <div className="registerRightDesc">
              <b>Criar uma Página</b> para uma celebridade, marca ou empresa.
            </div>
        </div>
        </div>
    </div>
  )
}