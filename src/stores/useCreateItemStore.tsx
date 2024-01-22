import create from 'zustand'
import type { FormError } from '../lib/validate'

interface CreateItem {
  data: Partial<Item>
  error: FormError<Item>
  setData: (Item: Partial<Item>) => void
  setError: (error: Partial<FormError<Item>>) => void
}

export const useCreateItemStore = create<CreateItem>((set, get) => (
  {
    data: {
      kind: 'expenses',
      happen_at: '',
      tag_ids: [],
      amount: 0
    },
    error: {
      kind: [],
      happen_at: [],
      amount: [],
      tag_ids: []
    },
    setData: (data: Partial<Item>) => {
      set(state => ({
        ...state,
        data: {
          ...state.data,
          ...data
        }
      }))
    },
    setError: (error: Partial<FormError<Item>>) => {
      set(state => ({
        ...state,
        error: {
          ...error
        }
      }))
    }
  }
))
