import type { IconItem } from './types'
import AngleLeft from '@assets/icons/angle-left.svg'
import AngleRight from '@assets/icons/angle-right.svg'
import AngleDoubleLeft from '@assets/icons/angle-double-left.svg'
import AngleDoubleRight from '@assets/icons/angle-double-right.svg'
import ArrowCircleDown from '@assets/icons/arrow-circle-down.svg'
import ArrowSmallLeft from '@assets/icons/arrow-small-left.svg'
import ArrowSmallRight from '@assets/icons/arrow-small-right.svg'
import ArrowSquareDown from '@assets/icons/arrow-square-down.svg'
import BoxOpen from '@assets/icons/box-open.svg'
import BoxOpenFull from '@assets/icons/box-open-full.svg'
import CalendarClock from '@assets/icons/calendar-clock.svg'
import CalendarDay from '@assets/icons/calendar-day.svg'
import CalendarStar from '@assets/icons/calendar-star.svg'
import CrossSmall from '@assets/icons/cross-small.svg'
import DiskArrowRight from '@assets/icons/disk-arrow-right.svg'
import DiskXMark from '@assets/icons/disk-xmark.svg'
import DoorClosed from '@assets/icons/door-closed.svg'
import DoorOpen from '@assets/icons/door-open.svg'
import DoorOpenSquare from '@assets/icons/door-open-square.svg'
import Folder from '@assets/icons/folder.svg'
import FolderTree from '@assets/icons/folder-tree.svg'
import InboxIn from '@assets/icons/inbox-in.svg'
import LocationAlt from '@assets/icons/location-alt.svg'
import LocationAltFill from '@assets/icons/location-alt-fill.svg'
import Minus from '@assets/icons/minus.svg'
import Paw from '@assets/icons/paw.svg'
import Plus from '@assets/icons/plus.svg'
import Apps from '@assets/icons/apps.svg'
import Grid from '@assets/icons/grid.svg'
import QuestionCheck from '@assets/icons/question-check.svg'

export const iconMap: Record<string, IconItem> = {
    angleLeft: { type: 'svg', component: AngleLeft },
    angleRight: { type: 'svg', component: AngleRight },
    angleDoubleLeft: { type: 'svg', component: AngleDoubleLeft },
    angleDoubleRight: { type: 'svg', component: AngleDoubleRight },
    arrowCircleDown: { type: 'svg', component: ArrowCircleDown },
    arrowSmallLeft: { type: 'svg', component: ArrowSmallLeft },
    arrowSmallRight: { type: 'svg', component: ArrowSmallRight },
    arrowSquareDown: { type: 'svg', component: ArrowSquareDown },
    boxOpen: { type: 'svg', component: BoxOpen },
    boxOpenFull: { type: 'svg', component: BoxOpenFull },
    calendarClock: { type: 'svg', component: CalendarClock },
    calendarDay: { type: 'svg', component: CalendarDay },
    calendarStar: { type: 'svg', component: CalendarStar },
    crossSmall: { type: 'svg', component: CrossSmall },
    diskArrowRight: { type: 'svg', component: DiskArrowRight },
    diskXMark: { type: 'svg', component: DiskXMark },
    doorClosed: { type: 'svg', component: DoorClosed },
    doorOpen: { type: 'svg', component: DoorOpen },
    doorOpenSquare: { type: 'svg', component: DoorOpenSquare },
    folder: { type: 'svg', component: Folder },
    forderTree: { type: 'svg', component: FolderTree },
    inboxIn: { type: 'svg', component: InboxIn },
    locationAlt: { type: 'svg', component: LocationAlt },
    locationAltFill: { type: 'svg', component: LocationAltFill },
    minus: { type: 'svg', component: Minus },
    paw: { type: 'svg', component: Paw },
    plus: { type: 'svg', component: Plus },
    apps: { type: 'svg', component: Apps },
    grid: { type: 'svg', component: Grid },
    questionCheck: { type: 'svg', component: QuestionCheck },
} as const
