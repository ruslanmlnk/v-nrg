import attachmentsIconAsset from '@public/icon/generated/training-training-page-attachments.svg'
import settingsIconAsset from '@public/icon/generated/training-training-page-settings.svg'
import videoInstructionsIconAsset from '@public/icon/generated/training-training-page-video-instructions.svg'

export const learningFormats = [
  {
    description: 'Матеріали з демонстрацією роботи апарата та основних процедур.',
    icon: videoInstructionsIconAsset,
    title: 'Відео-інструкції',
  },
  {
    description: 'Пояснення щодо підключення, підготовки до роботи та режимів.',
    icon: settingsIconAsset,
    title: 'Налаштування',
  },
  {
    description: 'Підбір маніпул та поради щодо роботи з різними зонами тіла.',
    icon: attachmentsIconAsset,
    title: 'Рекомендації по насадках',
  },
] as const

export const lessonsByTab = {
  'Перший запуск': [
    {
      description: 'Що входить в комплект та як правильно розпакувати апарат.',
      duration: '5:30',
      title: 'Розпакування\nта комплектація',
    },
    {
      description: 'Покрокова інструкція підключення та базові налаштування.',
      duration: '5:30',
      title: 'Підключення\nта налаштування',
    },
    {
      description: 'Огляд всіх функцій та кнопок на сенсорному екрані.',
      duration: '5:30',
      title: 'Робота з панеллю\nкерування',
    },
  ],
  'Робота з тілом': [
    {
      description: 'Які маніпули обрати для великих зон і як рухатися по масажних лініях.',
      duration: '6:10',
      title: 'Обробка великих\nзон тіла',
    },
    {
      description: 'Пояснення щодо інтенсивності вакууму для стегон, живота та рук.',
      duration: '4:45',
      title: 'Підбір режиму\nдля тіла',
    },
    {
      description: 'Практичні поради, як поєднувати техніку з комфортом для клієнта.',
      duration: '5:05',
      title: 'Комбінація технік\nта комфорт',
    },
  ],
  'Робота з обличчям': [
    {
      description: 'Базові протоколи для делікатної роботи по малих зонах і контурах.',
      duration: '4:20',
      title: 'Делікатні\nзони обличчя',
    },
    {
      description: 'Як контролювати інтенсивність і тривалість процедури без перевантаження тканин.',
      duration: '5:15',
      title: 'Безпечні\nналаштування',
    },
    {
      description: 'Поради по послідовності проходження зон для стабільного результату.',
      duration: '4:55',
      title: 'Послідовність\nпроцедури',
    },
  ],
  Обслуговування: [
    {
      description: 'Щоденний чек-лист по очищенню маніпул і контактних елементів.',
      duration: '3:40',
      title: 'Щоденне\nочищення',
    },
    {
      description: 'Що перевіряти перед стартом робочого дня, щоб уникати збоїв.',
      duration: '4:10',
      title: 'Передстартова\nперевірка',
    },
    {
      description: 'Коли потрібен сервіс і які ознаки підказують, що час на профілактику.',
      duration: '5:00',
      title: 'Профілактика\nта сервіс',
    },
  ],
} as const

export type TrainingTab = keyof typeof lessonsByTab

export const trainingTabs = Object.keys(lessonsByTab) as TrainingTab[]
