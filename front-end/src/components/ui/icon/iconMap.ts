import type { IconItem } from './types'
import ArrowDownCircle from '@assets/icons/icon-arrow-down-circle.svg'
import ArrowDownSquare from '@assets/icons/icon-arrow-down-square.svg'
import ArrowLeft from '@assets/icons/icon-arrow-left.svg'
import ArrowRight from '@assets/icons/icon-arrow-right.svg'
import Box from '@assets/icons/icon-box.svg'
import BoxFull from '@assets/icons/icon-box-full.svg'
import CalendarClock from '@assets/icons/icon-calendar-clock.svg'
import CalendarDay from '@assets/icons/icon-calendar-day.svg'
import CalendarStar from '@assets/icons/icon-calendar-star.svg'
import Cancel from '@assets/icons/icon-cancel.svg'
import ChevronLeft from '@assets/icons/icon-chevron-left.svg'
import ChevronRight from '@assets/icons/icon-chevron-right.svg'
import ChevronLeftDouble from '@assets/icons/icon-chevron-left-double.svg'
import ChevronRightDouble from '@assets/icons/icon-chevron-right-double.svg'
import Cross from '@assets/icons/icon-cross.svg'
import DiskArrowRight from '@assets/icons/icon-disk-arrow-right.svg'
import DiskCrossCircle from '@assets/icons/icon-disk-cross-circle.svg'
import DoorClosed from '@assets/icons/icon-door-closed.svg'
import DoorOpen from '@assets/icons/icon-door-open.svg'
import DoorOpenSquare from '@assets/icons/icon-door-open-square.svg'
import Folder from '@assets/icons/icon-folder.svg'
import FolderArrowUp from '@assets/icons/icon-folder-arrow-up.svg'
import FolderMinus from '@assets/icons/icon-folder-minus.svg'
import FolderTree from '@assets/icons/icon-folder-tree.svg'
import Grid2x2 from '@assets/icons/icon-grid-2x2.svg'
import Grid3x3 from '@assets/icons/icon-grid-3x3.svg'
import InboxArrowDown from '@assets/icons/icon-inbox-arrow-down.svg'
import Location from '@assets/icons/icon-location.svg'
import LocationFill from '@assets/icons/icon-location-fill.svg'
import Megaphone from '@assets/icons/icon-megaphone.svg'
import MegaphoneFill from '@assets/icons/icon-megaphone-fill.svg'
import Minus from '@assets/icons/icon-minus.svg'
import Paw from '@assets/icons/icon-paw.svg'
import Plus from '@assets/icons/icon-plus.svg'
import Qa from '@assets/icons/icon-qa.svg'
import Star from '@assets/icons/icon-star.svg'
import StarFill from '@assets/icons/icon-star-fill.svg'
import Tags from '@assets/icons/icon-tags.svg'
import Thumbtack from '@assets/icons/icon-thumbtack.svg'
import ThumbtackFill from '@assets/icons/icon-thumbtack-fill.svg'
import Upload from '@assets/icons/icon-upload.svg'
import VolumeFill from '@assets/icons/icon-volume-fill.svg'

export const iconMap: Record<string, IconItem> = {
    arrowDownCircle: { type: 'svg', component: ArrowDownCircle },
    arrowDownSquare: { type: 'svg', component: ArrowDownSquare },
    arrowLeft: { type: 'svg', component: ArrowLeft },
    arrowRight: { type: 'svg', component: ArrowRight },
    box: { type: 'svg', component: Box },
    boxFull: { type: 'svg', component: BoxFull },
    calendarClock: { type: 'svg', component: CalendarClock },
    calendarDay: { type: 'svg', component: CalendarDay },
    calendarStar: { type: 'svg', component: CalendarStar },
    cancel: { type: 'svg', component: Cancel },
    chevronLeft: { type: 'svg', component: ChevronLeft },
    chevronRight: { type: 'svg', component: ChevronRight },
    chevronLeftDouble: { type: 'svg', component: ChevronLeftDouble },
    chevronRightDouble: { type: 'svg', component: ChevronRightDouble },
    cross: { type: 'svg', component: Cross },
    diskArrowRight: { type: 'svg', component: DiskArrowRight },
    diskCrossCircle: { type: 'svg', component: DiskCrossCircle },
    doorClosed: { type: 'svg', component: DoorClosed },
    doorOpen: { type: 'svg', component: DoorOpen },
    doorOpenSquare: { type: 'svg', component: DoorOpenSquare },
    folder: { type: 'svg', component: Folder },
    folderArrowUp: { type: 'svg', component: FolderArrowUp },
    folderMinus: { type: 'svg', component: FolderMinus },
    folderTree: { type: 'svg', component: FolderTree },
    grid2x2: { type: 'svg', component: Grid2x2 },
    grid3x3: { type: 'svg', component: Grid3x3 },
    inboxArrowDown: { type: 'svg', component: InboxArrowDown },
    location: { type: 'svg', component: Location },
    locationFill: { type: 'svg', component: LocationFill },
    megaphone: { type: 'svg', component: Megaphone },
    megaphoneFill: { type: 'svg', component: MegaphoneFill },
    minus: { type: 'svg', component: Minus },
    paw: { type: 'svg', component: Paw },
    plus: { type: 'svg', component: Plus },
    qa: { type: 'svg', component: Qa },
    star: { type: 'svg', component: Star },
    starFill: { type: 'svg', component: StarFill },
    tags: { type: 'svg', component: Tags },
    thumbtack: { type: 'svg', component: Thumbtack },
    thumbtackFill: { type: 'svg', component: ThumbtackFill },
    upload: { type: 'svg', component: Upload },
    volumeFill: { type: 'svg', component: VolumeFill },
} as const
