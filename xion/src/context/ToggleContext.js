import React, {createContext, useContext,useState} from 'react';

//1. 컨텍스트 생성 
const ToggleContext = createContext(); 

//2. context provider 

export const ToggleProvider = ({children})=>{
    const [isToggleVisible, setIsToggleVisible] = useState(false); 

const toggle = () =>{
    setIsToggleVisible((prev)=> !prev)
};

const unToggle = ()=>{
    if(isToggleVisible){
        setIsToggleVisible(false); 
        console.log(isToggleVisible)
    }

}
return (
    <div>
        <ToggleContext.Provider value={{toggle,isToggleVisible,unToggle}}>
         {children}
        </ToggleContext.Provider>
    </div>
);
}

//3.useContext 커스텀 훅을 사용
export const useToggle = () =>{
    const context= useContext(ToggleContext);
    if (!context) {
     throw new Error("useToggle은 ToggleProvider안에서 사용합니다.")
    }
    return context; 
}
   


export default ToggleContext;