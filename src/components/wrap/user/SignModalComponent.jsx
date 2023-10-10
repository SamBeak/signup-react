import React from 'react';
import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';

export default function SignModalComponent() {
    const [isSignin, setIsSignin] = React.useState(false);

    // 로그인 / 회원가입 버튼 클릭 => 색상 변경 => 현재 카테고리 식별 231011_bhg
    const onClickSignModal = (e) => {
        const signinBtn = document.querySelector('#signin__btn');
        const signupBtn = document.querySelector('#signup__btn');
        e.target.innerText === '로그인' ? setIsSignin(true) : setIsSignin(false);
        if(e.target.innerText === '로그인'){
            setIsSignin(true);
            signinBtn.classList.add('active');
            if(signupBtn.classList.contains('active')){
                signupBtn.classList.remove('active');
            }
        }
        else{
            setIsSignin(false);
            signupBtn.classList.add('active');
            if(signinBtn.classList.contains('active')){
                signinBtn.classList.remove('active');
            }
        }
    }

    
  return (
    <div id="signModal">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <div className="sign__title">
                        <ul className="sign__list">
                            <li className="sign__item">
                                <button id="signin__btn" className="sign__btn" type="button" onClick={onClickSignModal}>로그인</button>
                            </li>
                            <li className="sign__item">
                                <button id="signup__btn" className="sign__btn" type="button" onClick={onClickSignModal}>회원가입</button>
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
