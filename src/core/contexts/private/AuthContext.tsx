import { createContext } from "react";
import { User } from "../../../types/User";

type AuthContextProps = {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(null!);