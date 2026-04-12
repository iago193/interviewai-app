export type Token = {
  token: string;
};

export type AuthContextType = {
  token: Token | null;
  error: string;
  login: (form: FormData) => Promise<void>;
  logout: () => void;
};