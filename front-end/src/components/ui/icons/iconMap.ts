import type { IconItem } from './types'
import AngleLeft from '@assets/icons/angle-left.svg'
import AngleRight from '@assets/icons/angle-right.svg'
import AngleDoubleLeft from '@assets/icons/angle-double-left.svg'
import AngleDoubleRight from '@assets/icons/angle-double-right.svg'

export const iconMap: Record<string, IconItem> = {
    angleLeft: { type: 'svg', component: AngleLeft },
    angleRight: { type: 'svg', component: AngleRight },
    angleDoubleLeft: { type: 'svg', component: AngleDoubleLeft },
    angleDoubleRight: { type: 'svg', component: AngleDoubleRight },
} as const
