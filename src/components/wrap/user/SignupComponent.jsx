import React from 'react';

export default function SignupComponent() {
  return (
    <div id="signup">
        <div className="container">
            <div className="gap">
                <ul className="signup__list">
                    <li className="signup__item"><label htmlFor="userId">아이디</label><input type="text"     id="userId" /></li>
                    <li className="signup__item"><label htmlFor="userPw">비밀번호</label><input type="password" id="userPw" /></li>
                    <li className="signup__item"><label htmlFor="userPwc">비밀번호 확인</label><input type="password" id="userPwc" /></li>
                    <li className="signup__item"><label htmlFor="userEmail">이메일</label><input type="email"    id="userEmail" /></li>
                    <li className="signup__item"><label htmlFor="userName">이름</label><input type="text"     id="userName" /></li>
                    <li className="signup__item"><label htmlFor="userHp">연락처</label><input type="text"     id="userHp" /></li>
                    <li className="signup__item"><label htmlFor="userAddr">주소</label><input type="text"     id="userAddr" /></li>
                    <li className="signup__item"><label htmlFor="userGender">성별</label><input type="text"     id="userGender" /></li>
                    <li className="signup__item"><label htmlFor="userBirth">생년월일</label><input type="text"     id="userBirth" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
