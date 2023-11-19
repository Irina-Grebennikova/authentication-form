async function isUserExist(email: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!!email);
    }, 1000);
  });
}

async function authorizeUser(email: string, password: string): Promise<void> {
  if (!email || !password) {
    return;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export { isUserExist, authorizeUser };
