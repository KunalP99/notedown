import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

interface GoogleUserInfo {
  email: string,
  given_name: string,
  sub: string,
  name: string,
  picture: string
}

const LoginButton = () => {
  return (
    <GoogleLogin
      useOneTap
      onSuccess={(res) => {
        const decoded: GoogleUserInfo = jwt_decode(res.credential || '');
        console.log(decoded)
      }}
      onError={() => console.log('Failed to Login')}
    />
  )
}

export default LoginButton