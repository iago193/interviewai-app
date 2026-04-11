import { api } from "../../services/axios";
import { AxiosError } from "axios";

export async function action(form: FormData) {
  try {
    const email = form.get("email");
    const password = form.get("password");

    const { data } = await api.post("/auth", { email, password });

    // localStorage.setItem("token", data.access_token);

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error("Credenciais inválidas.");
      }
      if (error.response?.status === 500) {
        throw new Error("Erro interno do servidor. Tente novamente.");
      }
    }

    throw new Error("Algo deu errado. Tente novamente.");
  }
}