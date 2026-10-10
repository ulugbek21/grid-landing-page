import iconSparkle from './assets/icon-sparkle.svg'
import iconPlus from './assets/icon-plus.svg'
import iconArrowRight from './assets/icon-arrow-right.svg'
import iconTrendingUp from './assets/icon-trending-up.svg'

export type Stat = {
  icon: string
  value: string
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    icon: iconSparkle,
    value: '2.4M',
    label: 'Students reached',
    description: 'Across 31 countries since 2011.',
  },
  {
    icon: iconPlus,
    value: '1,284',
    label: 'Schools partnered',
    description: 'In 14 countries, from Kenya to Guatemala.',
  },
  {
    icon: iconArrowRight,
    value: '38K',
    label: 'Teachers trained',
    description: 'Equipped with modern tools and methodology.',
  },
  {
    icon: iconTrendingUp,
    value: '3.1×',
    label: 'Graduation lift',
    description: 'Partner schools outperform national averages 3x.',
  },
]
