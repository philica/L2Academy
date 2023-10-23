import { useDispatch } from 'react-redux';
import { login } from '../slice/loginSlice';

export const useLogin = () => {
    const dispatch = useDispatch();
    const loginFunction = (user) => {
        dispatch(login(user))
    }
    return { loginFunction }
}