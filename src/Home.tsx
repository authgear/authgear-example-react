// src/Home.tsx  
import React, { useEffect, useState, useCallback, useContext } from "react";
import authgear, { Page, PromptOption } from "@authgear/web";
import { UserContext } from "./context/UserProvider";

const Home: React.FC = () => {
  const [greetingMessage, setGreetingMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    async function updateGreetingMessage() {
      setIsLoading(true);
      try {
        if (isLoggedIn) {
          const userInfo = await authgear.fetchUserInfo();
          setGreetingMessage("The current User sub: " + userInfo.sub);
        }
      } finally {
        setIsLoading(false);
      }
    }

    updateGreetingMessage().catch((e) => {
      console.error(e);
    });
  }, [isLoggedIn]);

  const startLogin = useCallback(() => {
    authgear
      .startAuthentication({
        redirectURI: import.meta.env.VITE_AUTHGEAR_REDIRECT_URL,
        prompt: PromptOption.Login,
      })
      .then(
        () => {
          // started authentication, user should be redirected to Authgear
        },
        (err) => {
          // failed to start authorization
          console.error(err);
        }
      );
  }, []);

  const logout = useCallback(() => {
    authgear
      .logout({
        redirectURI: "http://localhost:4000/",
      })
      .then(
        () => {
          setGreetingMessage("");
        },
        (err) => {
          console.error(err);
        }
      );
  }, []);

  const userSetting = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation();
      await authgear.open(Page.Settings);
    },
    []
  );

  return (
    <div>
      <h1>Home Page</h1>
      {isLoading && "Loading"}
      {greetingMessage ? <span>{greetingMessage}</span> : null}
      {!isLoggedIn && (
        <div>
          <button type="button" onClick={startLogin}>
            Login
          </button>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <button type="button" onClick={logout}>
            Logout
          </button>
          <br />
          <a target="_blank" rel="noreferrer" onClick={userSetting} href="#">
            User Setting
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;