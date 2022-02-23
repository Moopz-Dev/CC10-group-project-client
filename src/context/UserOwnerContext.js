import { createContext, useEffect, useState } from 'react';
import { getUserProfile } from '../apis/user';

const UserOwnerContext = createContext();

const UserOwnerContextProvider = ({ children }) => {
  [userOwner, setUserOwner] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await getUserProfile();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserProfile();
  }, []);

  return <UserOwnerContext.Provider>{children}</UserOwnerContext.Provider>;
};
export default UserOwnerContextProvider;

export { UserOwnerContext };
