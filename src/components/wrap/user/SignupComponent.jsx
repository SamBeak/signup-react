import React from 'react';

export default function SignupComponent({signup, setIsSignModal}) {
    const [state, setState] = React.useState(signup);
    const [isSignupProgressbar, setIsSignupProgressbar] = React.useState(false);

    // 라벨 이동 이벤트 231017_bhg
    const onMoveLabel = (e) => {
        const forName = e.target.id;
        const label = document.querySelector(`label[for=${forName}]`);
        label.classList.add("active");

        e.target.addEventListener("blur", () => {
            if(e.target.value === ""){
                label.classList.remove("active");
            }
        });
    };

    // 회원가입 버튼 클릭 이벤트 231023_bhg
    const onClickSignup = (e) => {
        e.preventDefault();
        setIsSignupProgressbar(true);
        setTimeout(() => {
            setIsSignModal(false);
        }, 3300);
    }

    // 정규표현식 아이디 유효성 검사 231018_bhg
    const onChangeId = (e) => {
        const {value} = e.target;
        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

        let userId = '';
        let isIdErr = false;
        let isIdMsg = '';
    };
  return (
    <div id="signup">
        <div className="container">
            <div className="gap">
                <ul className="signup__list">
                    <li className="signup__item"><label htmlFor="userId">아이디</label><input type="text" id="userId" onFocus={onMoveLabel} onChange={onChangeId} /></li>
                    <li className="signup__item"><label htmlFor="userPw">비밀번호</label><input type="password" id="userPw" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userPwc">비밀번호 확인</label><input type="password" id="userPwc" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userEmail">이메일</label><input type="email" id="userEmail" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userName">이름</label><input type="text" id="userName" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userHp">연락처</label><input type="text" id="userHp" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userAddr">주소</label><input type="text" id="userAddr" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userGender">성별</label><input type="text" id="userGender" onFocus={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userBirth">생년월일</label><input type="text" id="userBirth" onFocus={onMoveLabel} /></li>
                </ul>
                <div className="btn__box">
                    <button className="submit__btn" onClick={onClickSignup}>회원가입</button>
                </div>
                {
                    isSignupProgressbar ? 
                        <div className="notification">
                            <div className="notification__body">
                                <img src="./images/check-circle.svg" alt="" className='notification__icon' />
                                Your account has been created! &#128640;
                            </div>
                            <div className="notification__progress"></div>
                        </div> : null
                }
            </div>
        </div>
    </div>
  )
}

SignupComponent.defaultProps = {
    signup: {
        userId: "",
        userPw: "",
        userPwc: "",
        userEmail: "",
        userName: "",
        userHp: "",
        userAddr: "",
        userGender: "",
        userBirth: "",

        isIdOk: false,
        isPwOk: false,
        isPwcOk: false,
        isEmailOk: false,
        isNameOk: false,
        isHpOk: false,
        isAddrOk: false,
        isGenderOk: false,
        isBirthOk: false,

        isIdMsg: "",
        isPwMsg: "",
        isPwcMsg: "",
        isEmailMsg: "",
        isNameMsg: "",
        isHpMsg: "",
        isAddrMsg: "",
        isGenderMsg: "",
        isBirthMsg: ""
    }
};