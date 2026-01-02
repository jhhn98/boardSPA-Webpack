export interface AttachmentFile {
    fileId: string
    name: string
    size: number
    url: string
}
export interface Attachments {
    hasFiles: boolean
    files: AttachmentFile[]
}
export interface BoardPost {
    postNo: string
    title: string
    author: string
    createdAt: string
    attachments?: Attachments
    views: number
}
