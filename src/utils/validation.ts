function validateEmail(email: string): boolean {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email.toLowerCase());
}

function validatePassword(password: string): boolean {
  return password.length >= 6 && /\d/.test(password);
}

export { validateEmail, validatePassword };
