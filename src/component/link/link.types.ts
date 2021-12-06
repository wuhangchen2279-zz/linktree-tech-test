export interface Props {
    linkType: LinkType;
    label: string;
}

export interface LinkCustomStyles {
    textAlign: string;
    color: string;
    backgroundColor: string;
}

export enum LinkType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}