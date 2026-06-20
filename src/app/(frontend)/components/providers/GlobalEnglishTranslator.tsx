'use client'

import { useEffect, useRef } from 'react'

import { generatedEnglishTranslations } from '../../lib/generatedEnglishTranslations'
import { useSitePreferences } from './SitePreferencesProvider'

const translatedAttributes = ['aria-label', 'placeholder', 'title']

type TranslationRecord = {
  original: string
  translated: string
}

export function GlobalEnglishTranslator() {
  const { locale } = useSitePreferences()
  const textTranslations = useRef(new Map<Text, TranslationRecord>())
  const attributeTranslations = useRef(new Map<Element, Map<string, TranslationRecord>>())

  useEffect(() => {
    const restoreTranslations = () => {
      for (const [node, translation] of textTranslations.current) {
        if (node.data === translation.translated) node.data = translation.original
      }
      textTranslations.current.clear()

      for (const [element, translations] of attributeTranslations.current) {
        for (const [attribute, translation] of translations) {
          if (element.getAttribute(attribute) === translation.translated) {
            element.setAttribute(attribute, translation.original)
          }
        }
      }
      attributeTranslations.current.clear()
    }

    if (locale !== 'en') {
      restoreTranslations()
      return
    }

    const translateTextNode = (node: Text) => {
      const existing = textTranslations.current.get(node)
      if (existing?.translated === node.data) return
      if (existing) textTranslations.current.delete(node)

      const value = node.data.trim()
      const translation = generatedEnglishTranslations[value]
      if (!value || !translation) return

      const translated = node.data.replace(value, translation)
      textTranslations.current.set(node, { original: node.data, translated })
      node.data = translated
    }

    const translateAttribute = (element: Element, attribute: string) => {
      const value = element.getAttribute(attribute)
      if (!value) return

      const elementTranslations = attributeTranslations.current.get(element)
      const existing = elementTranslations?.get(attribute)
      if (existing?.translated === value) return

      const translation = generatedEnglishTranslations[value]
      if (!translation) return

      const translations = elementTranslations ?? new Map<string, TranslationRecord>()
      translations.set(attribute, { original: value, translated: translation })
      attributeTranslations.current.set(element, translations)
      element.setAttribute(attribute, translation)
    }

    const translateNode = (root: Node) => {
      if (root instanceof Text) {
        translateTextNode(root)
        return
      }

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      let node = walker.nextNode()
      while (node) {
        translateTextNode(node as Text)
        node = walker.nextNode()
      }

      if (root instanceof Element) {
        for (const element of [root, ...root.querySelectorAll('*')]) {
          for (const attribute of translatedAttributes) {
            translateAttribute(element, attribute)
          }
        }
      }
    }

    translateNode(document.body)
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) translateNode(node)
        if (mutation.type === 'characterData') translateNode(mutation.target)
        if (mutation.type === 'attributes' && mutation.attributeName) {
          translateAttribute(mutation.target as Element, mutation.attributeName)
        }
      }
    })
    observer.observe(document.body, {
      attributeFilter: translatedAttributes,
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    })
    return () => observer.disconnect()
  }, [locale])

  return null
}
