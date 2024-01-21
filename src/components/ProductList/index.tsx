import { getAllBuilderDataModel } from '@/utils/builder/builderSDKFunctions'
import React, { useEffect } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

const ProductList = () => {

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllBuilderDataModel('resources')
            console.log(data)
        }

        fetchData()
    }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Card key={product.id} className="group relative">
              <CardHeader>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  // className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.price}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList