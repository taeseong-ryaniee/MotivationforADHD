export interface NoteData {
    date: string
    title: string
    content: string
    createdAt: string
}

export interface PracticalTip {
    category: string
    tips: string[]
}

export interface TodayTips {
    tip1: string
    tip2: string
    antiFogTip: string
    categories: string[]
}