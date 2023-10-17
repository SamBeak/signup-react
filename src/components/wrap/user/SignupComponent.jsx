import React from 'react';

export default function SignupComponent() {
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
  return (
    <div id="signup">
        <div className="container">
            <div className="gap">
                <ul className="signup__list">
                    <li className="signup__item"><label htmlFor="userId">아이디</label><input type="text" id="userId" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userPw">비밀번호</label><input type="password" id="userPw" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userPwc">비밀번호 확인</label><input type="password" id="userPwc" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userEmail">이메일</label><input type="email" id="userEmail" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userName">이름</label><input type="text" id="userName" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userHp">연락처</label><input type="text" id="userHp" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userAddr">주소</label><input type="text" id="userAddr" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userGender">성별</label><input type="text" id="userGender" onChange={onMoveLabel} /></li>
                    <li className="signup__item"><label htmlFor="userBirth">생년월일</label><input type="text" id="userBirth" onChange={onMoveLabel} /></li>
                </ul>
                <div className="btn__box">
                    <button className="submit__btn">회원가입</button>
                </div>
            </div>
        </div>
    </div>
  )
}
