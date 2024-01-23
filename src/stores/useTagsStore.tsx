import create from 'zustand'

type List = {
  list: Tag[]
  setTag: (data: Tag[]) => void
}

export const useTagsStore = create<List>((set, get) => (
  {
    list: [],
    setTag: (list: Tag[]) => {
      set(() => ({ list }))
    },
  }
))
