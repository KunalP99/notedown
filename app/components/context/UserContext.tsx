"use client"

import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

/* User Context to allow access to user data around entire application */

export interface IUser {
  email: string,
  given_name: string,
  name: string,
  picture: string,
  sub: string
}

export interface IUserContext {
  user: IUser,
  setUser: Dispatch<SetStateAction<IUser>>
}

// Default state for user object and setUser function
const defaultState = {
  user: {
    email: '',
    given_name: '',
    name: '',
    picture: '',
    sub: ''
  },
  setUser: () => undefined
} as IUserContext;

export const UserContext = createContext(defaultState);

interface UserProviderProps {
  children: ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({
    email: '',
    given_name: '',
    name: '',
    picture: '',
    sub: ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

