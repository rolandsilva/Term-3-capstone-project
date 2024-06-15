import {
  useReducer,
  useEffect,
  useContext,
  createContext,
} from "react";

import api from "../utils/api.utils";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export function useProvideAuth() {
  const { state, dispatch } = useAuth();

  const register = async (user) => {
    try {
      await api.post("/auth/register", { user });

      return await login(user.customerEmail, user.password); // log user in after register.
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    }
  };

  const login = async (customerEmail, password) => {
    try {
      const res = await api.post("/auth/login", {
        customerEmail,
        password,
      });

      localStorage.setItem(
        "rolands-app-customer",
        JSON.stringify(res.data)
      );

      dispatch({
        type: "LOGIN",
        payload: res.data.customer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // Todo clear token and local state
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const savedCustomer =
      JSON.parse(localStorage.getItem("rolands-app-customer")) ||
      false;

    if (savedCustomer) {
      dispatch({
        type: "LOGIN",
        payload: savedCustomer,
      });
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  }, [dispatch]);

  return {
    state,
    register,
    login,
    logout,
  };
}
