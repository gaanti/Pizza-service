export type pagedPizzas = {
      categories: category[];

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
      doughRadius: doughRadius[];
      doughWidths: doughWidths[];
      ingredients: ingredient[];
};
export type doughRadius = { radius: number };
export type doughWidths = { id: number; doughWidthTitle: string };
export type category = {
      id: number;
      categoryTitle: string;
};

export type ingredient = {
      id: number;
      ingredientName: string;
};

export interface PizzaForCart extends pizza {
      id: number;
      doughWidth: string;
      doughRadius: number;
      quantity: number;
}

export type pizza = {
      id: number;
      title: string;
      image: string;
      price: number;
      category: string;
      rank: number;
      ingredients: ingredient[];
};

export type filteringParams = {
      filterCategoryId: number;
      filterCategoryOptions: { id: number; categoryTitle: string }[] | null;
      filterTitle: string | null;
      sortBy: string;
};
