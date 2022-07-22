import React, { useEffect, useState, useCallback, useContext } from "react";
import { UserContext } from "./context/UserProvider";
import authgear from "@authgear/web";
import { endpoint } from ".";

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
      .startAuthorization({
        redirectURI: "http://localhost:4000/auth-redirect",
        prompt: "login",
      })
      .then(
        () => {
          // started authorization, user should be redirected to Authgear
        },
        (err) => {
          // failed to start authorization
          console.error(err);
        }
      );
  }, []);

  const logout = useCallback(() => {
    authgear.logout().then(
      () => {
        setGreetingMessage("");
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div>
      {/* eslint-disable-next-line react/forbid-elements */}
      <h1>Home Page</h1>
      {isLoading && "Loading"}
      {greetingMessage ? <span>{greetingMessage}</span> : null}
      <div>
        <button type="button" onClick={startLogin}>
          Login
        </button>
      </div>
      {isLoggedIn && (
        <div>
          <button type="button" onClick={logout}>
            Logout
          </button>
          <a target="_blank" rel="noreferrer" href={endpoint + "/settings"}>
            User Setting
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
