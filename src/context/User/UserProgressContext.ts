import { createContext } from "react";
import { UserProgressContextType } from "../../interface/interface";

const UserProgressContext = createContext<UserProgressContextType>({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},

})

export default UserProgressContext;