import { GoogleLogin } from '@react-oauth/google';
import { useContext } from 'react'
import jwt_decode from 'jwt-decode';
import { UserContext } from '@/app/components/context/UserContext';

interface GoogleUserInfo {
  email: string,
  given_name: string,
  sub: string,
  name: string,
  picture: string
}

const LoginButton = () => {
  const { setUser } = useContext(UserContext);

  return (
    <GoogleLogin
      useOneTap
      onSuccess={(res) => {
        const decoded: GoogleUserInfo = jwt_decode(res.credential || '');
        setUser(decoded)
        window.localStorage.setItem('NOTEDOWN_USER', JSON.stringify(decoded));
      }}
      onError={() => console.log('Failed to Login')}
    />
  )
}

export default LoginButton