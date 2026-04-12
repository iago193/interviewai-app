import { api } from "../services/axios";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Token } from "./auth.types";
import { AuthContext } from "./userAuth";

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

      const { data } = await api.post("/auth", { email, password });

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
