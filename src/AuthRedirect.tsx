import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from './UserContext';
import authgear from '@authgear/web';

export default function AuthRedirect() {
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("1");
    authgear.finishAuthorization().then(
      result => {
        userContext.setIsLoggedIn(!!result.userInfo);
        navigate('/');
      },
      err => {
        console.error(err);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
