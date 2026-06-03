import { redirect } from 'next/navigation'

export default async function LegacyCatalogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  redirect(`/${category}`)
}
