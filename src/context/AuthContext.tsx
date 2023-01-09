import { createContext, ReactNode } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
    Google.useAuthRequest({
        clientId: '459959545530-3ctc3ahodpqj74u2fe6mbbinnm89si08.apps.googleusercontent.com',
        redirectUri:AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile','email']
    })
  console.log(AuthSession.makeRedirectUri({ useProxy: true }));
  async function signIn() {
    console.log("Entrou");
  }
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Beterraba",
          avatarUrl: "https://github.com/Lerpardo.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
