export interface Props {
    linkType: LinkType;
    label: string;
    href?: string;
    onClick?: () => void;
    subLabel?: string;
    status?: string;
    dataCy?: string;
}

export interface StyledLinkProps {
    textAlign: string;
    color: string;
    backgroundColor: string;
    hoverColor: string;
    linkType: LinkType;
    disabled: boolean;
}

export enum LinkType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}