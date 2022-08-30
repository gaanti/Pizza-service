export type pagedPizzas = {
      content: pizza[];
      empty: boolean;
      first: boolean;
      last: boolean;
      number: number;
      numberOfElements: number;
      pageable: {
            offset: 0;
            pageNumber: 0;
            pageSize: 8;
            paged: true;
            sort: { sorted: true; unsorted: false; empty: false };
            unpaged: false;
      };
      size: number;
      sort: {
            empty: false;
            sorted: true;
            unsorted: false;
      };
      totalElements: number;
      totalPages: number;
};

export type PizzaForCart = {
      title: string;
      image: string;
      price: number;
      doughType: string;
      size: number;
      quantity: number;
};
export type pizza = {
      title: string;
      image: string;
      doughType: string[];
      size: number[];
      price: number;
      category: string;
      rank: number;
};
