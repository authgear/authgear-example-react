import { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "./UserContext";
import authgear from "@authgear/web";

export default function AuthRedirect() {
  const usedToken = useRef(false);
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!usedToken.current) {
      authgear.finishAuthorization().then(
        (result) => {
          userContext.setIsLoggedIn(!!result.userInfo);
          navigate("/");
        },
        (err) => {
          console.error(err);
        }
      );
      usedToken.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
