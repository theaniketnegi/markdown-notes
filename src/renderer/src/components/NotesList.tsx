import { notesMock } from '@renderer/store/mocks'
import NotePreview from './NotePreview'

const NotesList = (): React.ReactNode => {
  if (notesMock.length === 0)
    return (
      <ul className='text-center mt-3'>
        <span>No notes yet</span>
      </ul>
    )
  return (
    <ul className="mt-3 space-y-1">
      {notesMock.map((note) => (
        <NotePreview key={note.title} title={note.title} lastEditTime={note.lastEditTime} />
      ))}
    </ul>
  )
}

export default NotesList
