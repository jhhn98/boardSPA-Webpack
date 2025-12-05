export type SvgIconType = {
    type: 'svg';
    component: any;
};

export type PngIconType = {
    type: 'png';
    url: string;
};

export type IconItem = SvgIconType | PngIconType;