export const loginErrors = (login: string): string[] => {
  const result: string[] = [];
  if (hasWhiteSpace(login)) {
    result.push('Логин не должен содержать пробельные символы');
  }
  if (onlyDigits(login)) {
    result.push('Логин не должен состоять только из цифр');
  }
  if (!allowedLength(login, 3, 20)) {
    result.push('Логин должен быть от 3 до 20 символов');
  }
  if (!allowedChars(login)) {
    result.push(
      'Логин должен быть без спецсимволов (допустимы дефис и нижнее подчёркивание)'
    );
  }
  return result;
};

export const passwordErrors = (password: string): string[] => {
  const result: string[] = [];
  if (!hasCapitalLetter(password)) {
    result.push('Пароль должен содержать хотя бы одну заглавную букву');
  }
  if (!hasDigit(password)) {
    result.push('Пароль должен содержать хотя бы одну цифру');
  }
  if (!allowedLength(password, 8, 40)) {
    result.push('Пароль должен быть от 8 до 40 символов');
  }

  return result;
};

const hasWhiteSpace = (s: string): boolean => {
  return /\s/g.test(s);
};

const hasCapitalLetter = (s: string): boolean => {
  return /.*[A-Z].*/g.test(s);
};

const hasDigit = (s: string): boolean => {
  return /.*[0-9].*/g.test(s);
};

const onlyDigits = (s: string): boolean => {
  return /^\d+$/g.test(s);
};

const allowedLength = (s: string, min: number, max: number): boolean => {
  return s.length >= min && s.length <= max;
};

const allowedChars = (s: string): boolean => {
  return /^[a-zA-Z0-9_-\s]*$/g.test(s);
};
