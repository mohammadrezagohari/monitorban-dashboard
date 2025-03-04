export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BaseBreadcrumbProps {
    paths: BreadcrumbItem[]
}