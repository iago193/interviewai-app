export function action(data: FormData) {
  const email = data.get("email");
  const password = data.get("password");
  return { email, password };
}
