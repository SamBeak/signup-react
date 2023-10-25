import { createContext } from 'react';

export const ModalContext = createContext(null);
// 초기값 null
// 실행하고자 하는 컴포넌트를 provier로 감싸지 않았고, value 값을 전달하지 않으면 초기값이 전달된다.