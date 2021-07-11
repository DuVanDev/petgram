import { useState, useEffect } from 'react'
import { getAPI } from '../Utilities/Rest'

const URL_GET_CATEGORIES =
  'https://petgram-o7875jfn3-duvanmorenocardona.vercel.app/categories'

export const useGetCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    const categoriesAPI = await getAPI(URL_GET_CATEGORIES)
    setCategories(categoriesAPI)
    setLoading(false)
  }, [])

  return { categories, loading }
}
