import React from 'react';
import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';

export default function SignModalComponent( {setIsSignModal} ) {
    const [isSignin, setIsSignin] = React.useState(false);

    // 로그인 / 회원가입 버튼 클릭 => 색상 변경 => 현재 카테고리 식별 231011_bhg
    const onClickSignModal = (e) => {
        e.target.innerText === '로그인' ? setIsSignin(true) : setIsSignin(false);
    };

    // 모달창 종료 231017_bhg
    const onClickOffModal = (e) => {
        if(e.target.id === "signModal") {
            setIsSignModal(false);
        }
    };


  return (
    <div id="signModal" onClick={onClickOffModal}>
        <div className="container">
            <div className="gap">
                <div className="title">
                    <div className="sign__title">
                        <ul className="sign__list">
                            <li className="sign__item">
                                <button id="signin__btn" className={isSignin ? "sign__btn active" : "sign__btn"} type="button" onClick={onClickSignModal}>로그인</button>
                            </li>
                            <li className="sign__item">
                                <button id="signup__btn" className={isSignin ? "sign__btn" : "sign__btn active"} type="button" onClick={onClickSignModal}>회원가입</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    {
                        isSignin ? <SigninComponent /> : <SignupComponent setIsSignModal={setIsSignModal} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
