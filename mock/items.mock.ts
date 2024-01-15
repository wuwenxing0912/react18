import { MockMethod } from "vite-plugin-mock";
import { faker } from "@faker-js/faker";

let id = 1;
const createId = () => {
  id += 1;
  return id;
};
const createItem = (attrs?: Partial<Item>): Item => ({
  id: createId(),
  user_id: 1,
  amount: faker.datatype.number({ min: 99, max: 3000_00 }),
  tag_ids: [1, 2],
  happen_at: faker.date.past().toISOString(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
  kind: "expenses",
  ...attrs,
});

const createItemList = (
  { perPage = 10, page = 1, count = 100 },
  attrs?: Partial<Item>
): Resources<Item> => {
  const sendCount = (page - 1) * perPage;
  const left = count - sendCount;
  return {
    resources:
      left > 0
        ? Array.from({ length: Math.min(left, perPage) }).map(() =>
            createItem(attrs)
          )
        : [],
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
  timeout: 5000,
  response: ({ query }: ResponseParams): Resources<Item> => {
    return createItemList({
      perPage: 10,
      page: parseInt(query.page),
      count: 36,
    });
  },
};
