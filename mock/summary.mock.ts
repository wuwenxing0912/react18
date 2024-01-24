import type { MockMethod } from 'vite-plugin-mock'

export const summaryMock: MockMethod[] = [{
  url: '/api/v1/items/summary',
  method: 'get',
  statusCode: 200,
  response: () => {
    return {
      groups: [
        { happen_at: '2024-01-01', tag: null, amount: 100 },
        { happen_at: '2024-01-02', tag: null, amount: 200 },
        { happen_at: '2024-01-03', tag: null, amount: 300 }
      ],
      total: 600
    }
  },
}]
