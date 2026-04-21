import historyIcon from '@public/icon/about/history.svg'
import missionIcon from '@public/icon/about/mission.svg'
import qualityIcon from '@public/icon/about/quality.svg'

export const aboutHighlights = [
  'Власні розробки та інженерні рішення',
  'Сертифіковане виробництво',
  'Підтримка спеціалістів та навчання',
] as const

export const aboutPrinciples = [
  {
    description: 'Покращувати якість життя людей через сучасні технології вакуумного масажу.',
    icon: missionIcon,
    title: 'Місія',
  },
  {
    description: 'V-NRG це результат багаторічних досліджень та розвитку у сфері вакуумної терапії.',
    icon: historyIcon,
    title: 'Історія',
  },
  {
    description: 'Дотримання міжнародних стандартів виробництва та багаторівневий контроль якості на кожному етапі.',
    icon: qualityIcon,
    title: 'Якість',
  },
] as const
