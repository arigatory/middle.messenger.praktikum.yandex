export type Indexed<T = any> = {
    [key in string]: T;
};
export declare function merge(lhs: Indexed, rhs: Indexed): Indexed;
export declare function isEqual(a: object, b: object): boolean;
export declare function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown;
