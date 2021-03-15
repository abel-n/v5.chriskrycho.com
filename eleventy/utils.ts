import { env } from 'process';

interface ToString {
   toString(): string;
}

export const toString = (a: ToString): string => a.toString();

export const logErr = (err: unknown): void => {
   if (env['DEBUG']) {
      console.error(err);
   }
};

export function hasType<T extends TypeOf>(type: T, item: unknown): item is T {
   return typeof item === type;
}

type TypeOf =
   | 'undefined'
   | 'object'
   | 'boolean'
   | 'number'
   | 'bigint'
   | 'string'
   | 'symbol'
   | 'function';
