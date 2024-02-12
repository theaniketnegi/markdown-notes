import NotePreview from './NotePreview'
import { useNotesList } from '@renderer/hooks/useNotesList'

const NotesList = ({ onSelect }: { onSelect: () => void }): React.ReactNode => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })
  if (notes.length === 0)
    return (
      <ul className="text-center mt-3">
        <span>No notes yet</span>
      </ul>
    )
  return (
    <ul className="mt-3 space-y-1">
      {notes.map((note, index) => (
        <NotePreview
          key={note.title}
          title={note.title}
          isActive={selectedNoteIndex === index}
          lastEditTime={note.lastEditTime}
          onClick={() => handleNoteSelect(index)}
        />
      ))}
    </ul>
  )
}

export default NotesList
