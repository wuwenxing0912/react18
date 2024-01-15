import { MockMethod } from "vite-plugin-mock";

let id = 1;
const createId = () => {
  id += 1;
  return id;
};
const createItem = (attrs?: Partial<Item>): Item => ({
  id: createId(),
  user_id: 1,
  amount: 1000,
  tag_ids: [1, 2],
  happen_at: "2021-08-01T00:00:00.000Z",
  created_at: "2021-08-01T00:00:00.000Z",
  updated_at: "2021-08-01T00:00:00.000Z",
  kind: "expenses",
  ...attrs,
});

const createItemList = (
  { perPage = 10, page = 1, count = 100 },
  attrs?: Partial<Item>
): Resources<Item> => {
  return {
    resources: Array.from({ length: perPage }).map(() => createItem(attrs)),
    pager: {
      page,
      per_page: perPage,
      count,
    },
  };
};

export const itemsMock: MockMethod = {
  url: "/api/v1/items",
  method: "get",
  statusCode: 200,
  response: ({ query }: ResponseParams): Resources<Item> => {
    return createItemList({
      perPage: 10,
      page: parseInt(query.page),
      count: 100,
    });
  },
};
