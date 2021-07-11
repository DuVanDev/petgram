import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'
import { Item, List } from './styled'
import { getAPI } from '../../Utilities/Rest'

const URL_GET_CATEGORIES = 'https://petgram-o7875jfn3-duvanmorenocardona.vercel.app/categories'

const ListOfCategories = () => {
  // const [categories, setCategories] = useState([])

  useEffect(() => {
    const categories = getAPI(URL_GET_CATEGORIES)
    console.log({ categories })
    // try {
    //   getAPI(URL_GET_CATEGORIES)
    // } catch (error) {
    //   console.error(error)
    //   setCategories([])
    // }
  }, [])

  return (
    <List>
      {categories.map((category, key) =>
        <Item key={category.id}>
          <Category
            {...category}
          />
        </Item>)}
    </List>
  )
}

export default ListOfCategories
