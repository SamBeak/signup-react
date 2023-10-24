import React from 'react'
import { Outlet } from 'react-router-dom';
import SignModalComponent from './user/SignModalComponent';

export default function HeaderComponent() {
  const [isSignModal, setIsSignModal] = React.useState(false);
  const [isSignin, setIsSignin] = React.useState(false);

  const onClickSignModal = (e) => {
    e.target.innerText === '로그인' ? setIsSignin(true) : setIsSignin(false);
    setIsSignModal(!isSignModal);
  };


  return (
    <>
      <header id="header">
        <div className="container">
          <div className="gap">
            <div className="content">
              <div className="box__left">
                <div className="nav__icon">
                  <hr />
                  <hr />
                  <hr />
                </div>
              </div>
              <div className="box__right">
                <ul className="btn__list">
                  <li className="btn__item">
                    <button className="signin__btn" type='button' onClick={onClickSignModal}>로그인</button>
                  </li>
                  <li className="btn__item">
                    <button className="signup__btn" type='button' onClick={onClickSignModal}>회원가입</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {
          isSignModal ? <SignModalComponent setIsSignModal = {setIsSignModal} isSignin={isSignin} setIsgnin={setIsSignin} /> : null
        }
      </header>
      <Outlet />
    </>
  )
}
