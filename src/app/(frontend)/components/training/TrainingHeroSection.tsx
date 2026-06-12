'use client'

import PageHero from '../shared/PageHero'

export function TrainingHeroSection({
  description,
  title,
}: {
  description: string
  title: string
}) {
  return (
    <PageHero
      currentLabel="Навчання"
      title={title}
      description={description}
    />
  )
}
