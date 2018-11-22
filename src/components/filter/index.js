import React from 'react'
import classNames from 'classnames'

import './filter.css'

const btns = [
  {
    label: 'All',
    name: 'all'
  },
  {label: 'Done', name: 'done'},
  {label: 'Active', name: 'active'},
  {label: 'Important', name: 'important'}
]

const Filter = ({filter, onFilterChange}) => {
  return (
    <div>
      {btns.map(({label, name}) => <button
        type="button"
        key={name}
        onClick={() => onFilterChange(name)}
        className={classNames('btn', filter === name && 'btn--active')}
       >
       {label}
     </button>)}
    </div>
  )
}
export default Filter
