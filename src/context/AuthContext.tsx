import { api } from "../services/axios";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Token } from "./auth.types";
import { AuthContext } from "./userAuth";
import { endPoints } from "../api/endPoints/endpoints";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<Token | null>(() => {
    try {
      const token = localStorage.getItem("token");
      return token ? { token } : null;
    } catch {
      return null;
    }
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (form: FormData) => {
    setError("");

    try {
      const email = form.get("email");
      const password = form.get("password");

      const { data } = await api.post(endPoints.auth, { email, password });

      localStorage.setItem("token", data.access_token);
      setToken({ token: data.access_token });

      navigate("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          setError("Credenciais inválidas.");
          return;
        }
        if (error.response?.status === 500) {
          setError("Erro interno do servidor. Tente novamente.");
          return;
        }
      }

      setError("Algo deu errado. Tente novamente.");
    }
  };

  try {
    const res = api.get(endPoints.user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
