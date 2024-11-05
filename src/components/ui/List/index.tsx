import React from 'react'

interface ListProps {
  items: {
    name: string
    label: string
  }[]
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  )
}

export default List
