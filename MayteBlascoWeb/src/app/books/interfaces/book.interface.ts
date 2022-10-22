export interface BookInfo {
   id: string;
   title: string;
   image: string;
   year: number;
   publisher: string;
   summary: string[];
   stores: Store[];
   awards?: AwardsList[];
   reviews: Review[];
}

interface AwardsList {
   award: string;
   url: string;
}

interface Review {
   review: string;
   url: string;
}

interface Store {
   store: string;
   url: string;
}