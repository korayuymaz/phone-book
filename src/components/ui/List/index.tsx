import React from 'react'
import './index.scss'

interface ListProps {
  items: {
    id: string
    name: string
    number: string
  }[]
}

const List: React.FC<ListProps> = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map((item) => (
        <li className="list" key={item.id}>
          {item.name} <span className="list__number">{item.number}</span>
        </li>
      ))}
    </ul>
  )
}

export default List
