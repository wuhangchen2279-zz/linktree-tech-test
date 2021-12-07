export interface DetailLinkItem {
    title: string;
    subTitle?: string;
    status?: string;
    url: string;
    iconUrl?: string;
}

export interface Props {
    label: string,
    providerUrl?: string,
    detailItems: DetailLinkItem[],
    expanded: boolean,
    onClick: () => void
}