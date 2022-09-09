export type pagedPizzas = {
      categories: { id: number; categoryTitle: string }[];

      pizzas: {
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
      doughRadius: doughRadius
      doughWidths: doughWidths
};
export type doughRadius = {radius: number}[];
export type doughWidths = {id: number, doughWidthTitle: string}[];
export type PizzaForCart = {
      title: string;
      image: string;
      price: number;
      doughWidth: string;
      doughRadius: number;
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

export type filteringParams = {
      filterCategoryId: number;
      filterCategoryOptions: { id: number; categoryTitle: string }[] | null;
      filterTitle: string | null;
      sortBy: string;
};