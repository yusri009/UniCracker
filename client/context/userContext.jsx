import axios from "axios";
import { createContext, useState, useEffect } from "react";

axios.defaults.withCredentials = true;

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios
        .get("/profile")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
