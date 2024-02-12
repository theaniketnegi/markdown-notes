import { NoteInfo } from 'src/shared/models'
import { cn, dateFromMs } from '@renderer/utils'

export type NotePreviewProps = NoteInfo & { isActive?: boolean }

const NotePreview = ({
  title,
  isActive = false,
  lastEditTime
}: NotePreviewProps): React.ReactNode => {
  const date = dateFromMs(lastEditTime)
  return (
    <div
      className={cn('cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75', {
        'bg-zinc-400/75': isActive,
        'hover:bg-zinc-500/75': !isActive
      })}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}

export default NotePreview
