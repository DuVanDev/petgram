import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styled'
import { useGetCategoriesData } from '../../Hooks/useGetCategoriesData'

const ListOfCategories = () => {
  const { categories, loading } = useGetCategoriesData()
  return (
    <List loading={loading}>
      {!loading
        ? categories.map((category) =>
          <Item key={category.id}>
            <Category
              {...category}
            />
          </Item>)
        : [1, 2, 3, 4, 5].map(
            (categories, key) =>
              <Item key={key} />
          )}
    </List>
  )
}

export default ListOfCategories