import { LibraryItem } from './types'

export const getSeverity = (item: LibraryItem) => {
  switch (item.status) {
    case 'completed':
      return 'success'

    case 'not started':
      return 'warn'

    case 'learning':
      return 'danger'

    default:
      return null
  }
}
