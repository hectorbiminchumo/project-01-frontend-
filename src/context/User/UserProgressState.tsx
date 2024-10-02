import { useState } from "react";
import UserProgressContext from "./UserProgressContext";
import { Props } from "../../interface/interface";

const UserProgressState: React.FC<Props> = ({children}) => {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }
    function showCheckout() {
        setUserProgress('checkout');
    }
    function hideCheckout() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
    {children}
    </UserProgressContext.Provider>
  )
}

export default UserProgressState;