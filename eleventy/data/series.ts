export interface Series {
   title: string;
   /**
     Which part in the series? 0-indexed because it doesn't make sense to have a
     number less than 0 for this, and a set of concrete integers because it
     doesn't make sense to have 4.2 (at least a I conceive it now). Wouldn't it
     be great if JS had, you know... integers and floats?

     I'll add to these eventually, when I actually need more. Or I'll finish
     implementing lightning-rs and I'll just, you know... be able to use u8 and
     call it a day.
    */
   part: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
