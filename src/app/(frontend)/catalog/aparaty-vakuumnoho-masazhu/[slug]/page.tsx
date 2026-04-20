import ProductDetailRoute from '../ProductDetailRoute'

type ProductDetailsProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = await params

  return <ProductDetailRoute slug={slug} />
}
