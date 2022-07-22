import { useEffect, useState, useCallback, useContext } from "react";
import { UserContext } from "./UserContext";
import authgear from "@authgear/web";
// import Config from '../../config';

// const { apiEndpoint } = Config;

export default function Home() {
  const [greetingMessage, setGreetingMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const sessionState = authgear.sessionState;
        if (sessionState === "AUTHENTICATED") {
          setIsLoggedIn(true);
          await authgear
            .fetchUserInfo()
            .then((userInfo) => {
              setGreetingMessage("The current User sub: " + userInfo.sub);
            })
            .catch((e) => {
              console.log("Not Logged in?");
            });
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setIsLoggedIn]);

  const startLogin = useCallback(() => {
    authgear
      .startAuthorization({
        redirectURI: "http://localhost:3000/auth-redirect",
        prompt: "login",
      })
      .then(
        () => {
          // started authorization, user should be redirected to Authgear
        },
        (err) => {
          // failed to start authorization
        }
      );
  }, []);

  const logout = useCallback(() => {
    authgear
      .logout({
        redirectURI: "http://localhost:3000/logout-redirect",
      })
      .then(
        () => {
          setIsLoggedIn(false);
          setGreetingMessage("");
        },
        (err) => {
          console.error(err);
        }
      );
  }, [setIsLoggedIn]);
  return (
    <div>
      <h1>Home Page</h1>
      {isLoading && "Loading"}
      {greetingMessage ? <span>{greetingMessage}</span> : null}
      <div>
        <button onClick={startLogin}>Login</button>
      </div>
      {isLoggedIn && (
        <div>
          <button onClick={logout}>Logout</button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://react-tutorial.authgearapps.com/settings"
          >
            User Setting
          </a>
        </div>
      )}
    </div>
  );
}
