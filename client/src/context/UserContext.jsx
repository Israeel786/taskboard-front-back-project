import { createContext, useContext } from 'react';
import { useLocalStorage } from '../util.jsx';
const UserContext = createContext();
const UserProvider = props => {
    const [user, setUser] = useLocalStorage('taskboard_user', null);
    const updateUser = user => {
        setUser(user);
    };
    const value = {
        user,
        updateUser,
    };
    return (
        <UserContext.Provider
            value={value}>{props.children}</UserContext.Provider>
    );
};
const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
export { UserProvider, useUser };