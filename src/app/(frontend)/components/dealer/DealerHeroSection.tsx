'use client'

import PageHero from '../shared/PageHero'

export function DealerHeroSection({
  title,
  description,
}: {
  title?: string | null
  description?: string | null
}) {
  return (
    <PageHero
      currentLabel="Стати дилером"
      title={title ?? ''}
      description={description ?? ''}
      sectionClassName="pb-[91px] pt-14"
      contentClassName="max-w-[920px]"
    />
  )
}
