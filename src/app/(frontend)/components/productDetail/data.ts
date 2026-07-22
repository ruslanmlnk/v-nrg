import type { ProductData } from '../../data/products'

export function createProductGallery(product: ProductData) {
  const images = Array.from(
    new Set(
      [
        ...product.galleryImages,
        product.compareImage,
        product.catalogImage,
        product.cartImage,
      ].filter((image): image is string => Boolean(image)),
    ),
  )

  const imageItems = images.map((image, index) => ({
    alt: index === 0 ? `${product.title} основне фото` : `${product.title} фото ${index + 1}`,
    main: image,
    thumb: image,
    video: false,
  }))

  const videoItems = product.tabs
    .flatMap((tab) => (tab.content.type === 'videos' ? tab.content.items : []))
    .map((video, index) => {
      if (!video.previewImage) {
        return undefined
      }

      return {
        alt: video.alt || `${product.title} video ${index + 1}`,
        main: video.previewImage,
        thumb: video.previewImage,
        video: true,
      }
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  const visibleVideoItems = videoItems.slice(0, 5)
  const visibleImageItems = imageItems.slice(0, 5 - visibleVideoItems.length)

  return [...visibleImageItems, ...visibleVideoItems]
}

export function chunkItems<T>(items: readonly T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  )
}
