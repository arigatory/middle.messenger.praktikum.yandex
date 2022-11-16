const hasWhiteSpace = (s: string): boolean => /\s/.test(s);

const hasCapitalLetter = (s: string): boolean => /[A-ZА-ЯЁ]/.test(s);

const hasDigit = (s: string): boolean => /[0-9]/.test(s);

const onlyDigits = (s: string): boolean => /^\d+$/.test(s);

const allowedLength = (s: string, min: number, max: number): boolean =>
  s.length >= min && s.length <= max;

const allowedChars = (s: string): boolean => /^[a-zA-Z0-9_-\s]*$/.test(s);

const allowedNameChars = (s: string): boolean => /^[a-zA-Zа-яА-Я-\s]*$/.test(s);

const allowedEmailChars = (s: string): boolean => /^[a-zA-Z0-9-.@]*$/g.test(s);

const hasOneAt = (s: string): boolean => /^[^@]*@[^@]*$/.test(s);

const hasLettersBeforAndAfterAt = (s: string): boolean =>
  /^[^@]+@[^@]+$/.test(s);

const hasPointAfterAt = (s: string): boolean => /^[^@]*@[^@^.]+[.]/.test(s);

const hasPointInTheEnd = (s: string): boolean => /\.$/.test(s);

const hasTwoPointsInARow = (s: string): boolean => /\.\./.test(s);

const hasValidPhone = (s: string): boolean =>
  /^(\s*)(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(s);

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
      'Логин должен быть без спецсимволов (допустимы дефис и нижнее подчёркивание)',
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

export const nameErrors = (name: string): string[] => {
  const result: string[] = [];

  if (!allowedLength(name, 3, 20)) {
    result.push('Имя и фамилия должны быть от 3 до 20 символов');
  }

  if (!allowedNameChars(name)) {
    result.push('Разрешено исользовать только латиницу или кириллицу');
  }

  return result;
};

export const phoneErrors = (phone: string): string[] => {
  const result: string[] = [];

  if (!allowedLength(phone, 10, 15)) {
    result.push('Телефон должен быть от 10 до 15 символов');
  }

  if (!hasValidPhone(phone)) {
    result.push('Телефон должен правильным');
  }

  return result;
};

export const emailErrors = (email: string): string[] => {
  const result: string[] = [];

  if (!allowedEmailChars(email)) {
    result.push('Разрешено исользовать только латиницу, цифры и дефис');
  }

  if (!hasOneAt(email)) {
    result.push('Должен быть один символ @');
  }

  if (!hasLettersBeforAndAfterAt(email)) {
    result.push('Перед и после @ тоже должны быть символы');
  }

  if (!hasPointAfterAt(email)) {
    result.push('После @ где-то (не сразу) должна быть точка');
  }

  if (hasPointInTheEnd(email)) {
    result.push('Точка не должна быть последним символом');
  }

  if (hasTwoPointsInARow(email)) {
    result.push('Точки не должны идти продряд');
  }
  return result;
};
