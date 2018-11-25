export default (items, filter) => {
  switch (filter) {
    case "done":
      return items.filter(({done}) => done)
    case "active":
      return items.filter(({done}) => !done)
    case 'important':
      return items.filter(({important}) => important)
    case 'all':
      return items
    default:
      return items
  }
}