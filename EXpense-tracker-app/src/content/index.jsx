import { createContext, useState } from "react"


export const GlobalContext= createContext(null);


export default function GlobalState ({children}){
 const [userName ,setUserName]= useState("");
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => {
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
 };

    const [value ,setValue]=useState("");
   


    return ( <GlobalContext.Provider
         value={{
        userName,
        setUserName,
        value,
        setValue,
        isModalOpen,
         setIsModalOpen,
         openModal,
         closeModal

          } }>
        {
            children
        }
    </GlobalContext.Provider>

    )

}