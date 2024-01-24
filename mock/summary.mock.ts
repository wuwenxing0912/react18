import { faker } from '@faker-js/faker'
import type { MockMethod } from 'vite-plugin-mock'

export const summaryMock: MockMethod[] = [{
  url: '/api/v1/items/summary',
  method: 'get',
  statusCode: 200,
  response: ({ query }: ResponseParams) => {
    if (query.group_by === 'happen_at') {
      return {
        groups: [
          { happen_at: '2024-01-01', tag: null, amount: 100 },
          { happen_at: '2024-01-02', tag: null, amount: 200 },
          { happen_at: '2024-01-03', tag: null, amount: 300 }
        ],
        total: 600
      }
    } else if (query.group_by === 'tag_id') {
      return {
        groups: [
          {
            tag_id: 672,
            tag: {
              id: 672,
              user_id: 252,
              name: faker.lorem.word(),
              sign: faker.internet.emoji(),
              deleted_at: null,
              created_at: faker.date.past().toISOString(),
              updated_at: faker.date.past().toISOString(),
              kind: 'expenses'
            },
            amount: faker.datatype.number({ min: 99, max: 1000_00 }),
          },
          {
            tag_id: 670,
            tag: {
              id: 670,
              user_id: 252,
              name: faker.lorem.word(),
              sign: faker.internet.emoji(),
              deleted_at: null,
              created_at: faker.date.past().toISOString(),
              updated_at: faker.date.past().toISOString(),
              kind: 'expenses'
            },
            amount: faker.datatype.number({ min: 99, max: 1000_00 }),
          },
          {
            tag_id: 671,
            tag: {
              id: 671,
              user_id: 252,
              name: faker.lorem.word(),
              sign: faker.internet.emoji(),
              deleted_at: null,
              created_at: faker.date.past().toISOString(),
              updated_at: faker.date.past().toISOString(),
              kind: 'expenses'
            },
            amount: faker.datatype.number({ min: 99, max: 1000_00 }),
          }
        ],
        total: faker.datatype.number({ min: 99, max: 1000_00 })
      }
    }
  },
}]
