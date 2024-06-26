interface ILayout {
    children: React.ReactNode
}

interface IAuthCard {
    headerLabel: string
    subLabel: string
    backButtonHref: string
    backButtonLabel: string
    children: React.ReactNode
}

interface IBackButton {
    link: string
    label: string
}