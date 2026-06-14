'use client'

import { useEffect } from 'react'

import { generatedEnglishTranslations } from '../../lib/generatedEnglishTranslations'
import { useSitePreferences } from './SitePreferencesProvider'

const translatedAttributes = ['aria-label', 'placeholder', 'title']

export function GlobalEnglishTranslator() {
  const { locale } = useSitePreferences()

  useEffect(() => {
    if (locale !== 'en') return

    const translateNode = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      let node = walker.nextNode()
      while (node) {
        const value = node.textContent?.trim()
        if (value && generatedEnglishTranslations[value]) {
          node.textContent = node.textContent?.replace(value, generatedEnglishTranslations[value]) ?? null
        }
        node = walker.nextNode()
      }

      if (root instanceof Element) {
        for (const element of [root, ...root.querySelectorAll('*')]) {
          for (const attribute of translatedAttributes) {
            const value = element.getAttribute(attribute)
            if (value && generatedEnglishTranslations[value]) {
              element.setAttribute(attribute, generatedEnglishTranslations[value])
            }
          }
        }
      }
    }

    translateNode(document.body)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) translateNode(node)
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [locale])

  return null
}
