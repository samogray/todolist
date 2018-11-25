export default (items, term) => {
  if (term === '') {
    return items
  }
  return items.filter(({label}) => label.toLowerCase().indexOf(term.toLowerCase()) > -1)
}