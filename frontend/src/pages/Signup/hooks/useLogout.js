import { useDispatch } from 'react-redux';
import { logout } from '../slice/signupSlice';

export const useLogout = () => {
    const dispatch = useDispatch();
    const logoutFunction = () => {
        localStorage.removeItem('user')
        dispatch(logout())
    }
    return { logoutFunction }
}