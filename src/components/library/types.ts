export interface LibraryItem {
  id: number
  name: string
  category: string
  parents?: string[]
  childrenNumber?: number
  grandChildrenNumber?: number
  favourite: boolean
  status: string
  rating: number
  dateModified: string
  owner: string
}
