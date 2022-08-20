import { api } from "@/services/api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  name: string;
  bio: string;
  company: string;
};

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user?: User;
}

export const UserContext = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    api
      .get("/users/joaovictor3g")
      .then((response) => {
        const { html_url, avatar_url, login, bio, followers, name, company } =
          response.data;
        return {
          htmlUrl: html_url,
          avatarUrl: avatar_url,
          login,
          bio,
          followers,
          name,
          company,
        };
      })
      .then((_user) => setUser(_user));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
