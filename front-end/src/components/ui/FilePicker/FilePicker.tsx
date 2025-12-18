import { useState } from 'react'
import Icon from '../icon/Icon'

export default function FilePicker() {
    const [files, setFiles] = useState<File[]>([])
    const [isDragOver, setIsDragOver] = useState<boolean>(false)

    const addFiles = (newFiles: FileList | File[]) => {
        const fileArray = Array.from(newFiles)

        console.group('[FilePicker] addFiles')
        console.log('incoming files: ', fileArray)
        fileArray.forEach((f, i) => {
            console.log(`#${i}`, {
                name: f.name,
                size: f.size,
                type: f.type,
                lastModified: f.lastModified,
            })
        })
        console.groupEnd()

        setFiles((prev) => {
            const existing = new Set(prev.map((f) => `${f.name}-${f.size}`))
            const filtered = fileArray.filter((f) => !existing.has(`${f.name}-${f.size}`))
            return [...prev, ...filtered].slice(0, 10)
        })
    }
    // file 드래그 핸들러
    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(true)
    }
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }
    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(false)
    }
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(false)

        if (e.dataTransfer.files.length > 0) {
            console.log('[FilePicker] drop detected: ', e.dataTransfer.files)
            addFiles(e.dataTransfer.files)
            e.dataTransfer.clearData()
        }
    }
    // file 선택 핸들러
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        console.log('[FilePicker] input change detected: ', e.target.files)
        addFiles(e.target.files)
        e.target.value = ''
    }
    return (
        <div aria-labelledby="postAttachment">
            <div className="form-element custom-input-file">
                <div className="file-picker">
                    <div
                        className="file-dropzone"
                        onDragEnter={handleDragEnter}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <p className="file-dropzone-comment">파일을 여기로 드래그하거나</p>
                        <label htmlFor="file1" className="file-dropzone-pick">
                            <input
                                type="file"
                                id="file1"
                                className="input-file"
                                multiple
                                onChange={handleFileChange}
                            />
                        </label>
                        <p className="file-dropzone-pick-comment">
                            영역을 클릭하여 파일 선택 <br />
                            여러 파일 선택 가능
                        </p>
                    </div>
                    <div className="file-queue">
                        <ul className="file-queue-list">
                            <li className="file-queue-item">
                                <span className="name">
                                    <em className="file-name">
                                        aasdfasdfasdfasdfasdfqwerdgkasjefhqpwoeiufpisudhfkqwjehrlksjdhf
                                    </em>
                                    <em className="extension">.html</em>
                                </span>
                                <span className="meta">12 KB</span>
                                <button type="button" className="file-item-remove">
                                    <span>파일 제거</span>
                                    <Icon name="crossSmall" width={20} height={20} />
                                </button>
                            </li>
                            <li className="file-queue-item">
                                <span className="name">
                                    <em className="file-name">a</em>
                                    <em className="extension">.html</em>
                                </span>
                                <span className="meta">12 KB</span>
                                <button type="button" className="file-item-remove">
                                    <span>파일 제거</span>
                                    <Icon name="crossSmall" width={20} height={20} />
                                </button>
                            </li>
                            <li className="file-queue-item">
                                <span className="name">a.html</span>
                                <span className="meta">12 KB</span>
                                <button type="button" className="file-item-remove">
                                    <span>파일 제거</span>
                                    <Icon name="crossSmall" width={20} height={20} />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="file-actions">
                        <button type="button" className="submit">
                            <span>첨부하기</span>
                            <Icon name="diskArrowRight" width={20} height={20} />
                        </button>
                        <button type="button" className="cancel">
                            <span>전체 취소</span>
                            <Icon name="diskXMark" width={20} height={20} />
                        </button>
                        <p className="file-message"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
