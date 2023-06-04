import React from 'react'

interface ItemsListProps<T>{
    items: T[],
    renderItem:(item: T) => React.ReactNode
}

const ItemsList:React.FC<T> = (props:ItemsListProps<T>) => {
  return (
      <div>
          {props.items.map(props.renderItem)}
    </div>
  )
}

export default ItemsList