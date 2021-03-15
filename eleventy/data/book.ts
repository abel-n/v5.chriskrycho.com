import type { Dict } from '../../types/eleventy';
import { hasType } from '../utils';

export interface Book {
   title: string;
   author: string;
   year?: number | string;
   review?: {
      rating:
         | 'Required'
         | 'Recommended'
         | 'Recommended With Qualifications'
         | 'Not Recommended';
      summary: string;
   };
   cover?: string;
   link?: string;
}

export function isBook(maybeBook: unknown): maybeBook is Book {
   if (typeof maybeBook !== 'object' || !maybeBook) {
      return false;
   }

   const maybe = maybeBook as Dict<unknown>;

   return (
      typeof maybe.title === 'string' &&
      typeof maybe.author === 'string' &&
      (hasType('number', maybe.year) || hasType('string', maybe.year)) &&
      hasType('object', maybe.review) &&
      hasType('string', maybe.cover) &&
      hasType('string', maybe.link)
   );
}
