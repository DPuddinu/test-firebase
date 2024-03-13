import { User } from "firebase/auth";
import { createContext } from "react";

type UserContextType = User | null;


export const UserContext = createContext<UserContextType>(null);



