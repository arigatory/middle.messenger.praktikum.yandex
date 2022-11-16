export type Indexed<T = any> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (typeof rhs[p] === 'object') {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function isEqual(a: object, b: object): boolean {
  /**
	 * More accurately check the type of a JavaScript object
	 * @param  {Object} obj The object
	 * @return {String}     The object type
	 */
  function getType(obj: object) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    // Check length
    if ((<any>a).length !== (<any>b).length) return false;

    // Check each item in the array
    for (let i = 0; i < (<any>a).length; i++) {
      if (!isEqual((<any>a)[i], (<any>b)[i])) return false;
    }

    // If no errors, return true
    return true;
  }

  function areObjectsEqual() {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    // Check each item in the object
    for (const key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (!isEqual(a[key as keyof Object], b[key as keyof Object])) return false;
      }
    }

    // If no errors, return true
    return true;
  }

  function areFunctionsEqual() {
    return a.toString() === b.toString();
  }

  function arePrimativesEqual() {
    return a === b;
  }

  // Get the object type
  const type = getType(a);

  // If the two items are not the same type, return false
  if (type !== getType(b)) return false;

  // Compare based on type
  if (type === 'array') return areArraysEqual();
  if (type === 'object') return areObjectsEqual();
  if (type === 'function') return areFunctionsEqual();
  return arePrimativesEqual();
}

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown,
): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any,
  );

  return merge(object as Indexed, result);
}
