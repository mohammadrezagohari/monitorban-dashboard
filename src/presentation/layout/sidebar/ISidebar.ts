export interface SiderbarProps {
    items?: { label: string, icon: React.JSX.Element, href: string }[],
    pageIndex: number,
    setPageIndex: (index: number) => void
    activedUser?: any
}