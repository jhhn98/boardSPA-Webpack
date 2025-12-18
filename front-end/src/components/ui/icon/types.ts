export type SvgIconType = {
    type: 'svg'
    component: React.FC<React.SVGProps<SVGSVGElement>>
}

export type PngIconType = {
    type: 'png'
    url: string
}

export type IconItem = SvgIconType | PngIconType
