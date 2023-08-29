import { User } from "../../types/User";
import { createContext } from "react";

type AuthContextProps = {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(null!);