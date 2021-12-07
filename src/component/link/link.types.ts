export interface Props {
    linkType: LinkType;
    label: string;
    href: string;
}

export interface LinkCustomStyles {
    textAlign: string;
    color: string;
    backgroundColor: string;
    hoverColor: string;
}

export enum LinkType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}