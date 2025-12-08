import { iconMap } from './iconMap'

interface IconProps {
    name: keyof typeof iconMap;
    width?: number;
    height?: number;
    fill?: string;
    alt?: string;
}

export default function Icon({ name, width = 16, height = 16, fill = '#000', alt }: IconProps) {
    const icon = iconMap[name]

    if (!icon) return null;

    if (icon.type === 'svg') {
        const SvgComponent = icon.component;
        return (
            <SvgComponent width={width} height={height} fill={fill}/>
        )
    }
    if (icon.type === 'png') {
        return (
            <img src={icon.url} width={width} height={height} alt={alt ?? name}/>
        )
    }
    return null
}