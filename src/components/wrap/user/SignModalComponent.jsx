import React from 'react';
import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';

export default function SignModalComponent() {
    const [isSignin, setIsSignin] = React.useState(false);
    const onClickSignModal = (e) => {
        e.target.innerText === '로그인' ? setIsSignin(true) : setIsSignin(false);
    }
  return (
    <div id="signModal">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <div className="sign__title">
                        <ul className="sign__list">
                            <li className="sign__item">
                                <button className="sign__btn" type="button" onClick={onClickSignModal}>로그인</button>
                            </li>
                            <li className="sign__item">
                                <button className="sign__btn" type="button" onClick={onClickSignModal}>회원가입</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    {
                        isSignin ? <SigninComponent /> : <SignupComponent />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
