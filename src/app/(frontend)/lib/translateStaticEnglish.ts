import { generatedEnglishTranslations } from './generatedEnglishTranslations'
import { staticEnglishTranslations } from './staticEnglishTranslations'

const dictionary = Object.fromEntries(
  Object.entries({ ...generatedEnglishTranslations, ...staticEnglishTranslations }).map(
    ([key, value]) => [
      key
        .replaceAll('&apos;', "'")
        .replaceAll('&#39;', "'")
        .replaceAll('&quot;', '"')
        .replaceAll('&amp;', '&'),
      value,
    ],
  ),
)

const patterns: [RegExp, string][] = [
  [/^(.+) \/ місяць$/, '$1 / month'],
  [/^Перейти до слайд[ау] (\d+)$/, 'Go to slide $1'],
  [/^Перейти до відгуку (\d+)$/, 'Go to review $1'],
  [/^Відкрити зображення (\d+)$/, 'Open image $1'],
  [/^Додати (.+) до порівняння$/, 'Add $1 to comparison'],
  [/^Додати (.+) (?:до кошика|в кошик)$/, 'Add $1 to cart'],
  [/^Прибрати (.+) з порівняння$/, 'Remove $1 from comparison'],
  [/^Поділитися (.+)$/, 'Share $1'],
  [/^Відтворити відео: (.+)$/, 'Play video: $1'],
  [/^(.+) основне фото$/, '$1 main image'],
  [/^(.+) фото (\d+)$/, '$1 image $2'],
  [/^(.+) \(синій\)$/, '$1 (blue)'],
  [/^(.+) \(білий\)$/, '$1 (white)'],
  [/^(\d+) маніпул$/, '$1 handpieces'],
  [/^(\d+) Вт$/, '$1 W'],
]

export function translateStaticEnglish(value: string): string | undefined {
  const normalized = value.replace(/\s+/g, ' ').trim()
  const exact = dictionary[normalized]
  if (exact) return exact
  for (const [pattern, replacement] of patterns) {
    if (pattern.test(normalized)) return normalized.replace(pattern, replacement)
  }
  return undefined
}
