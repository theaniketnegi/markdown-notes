import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'
import { NoteInfo } from 'src/shared/models'

interface Note {
  notes: NoteInfo[]
  handleNoteSelect: (index: number) => Promise<void>
  selectedNoteIndex: number | null
}

export const useNotesList = ({ onSelect }: { onSelect?: () => void }): Note => {
  const notes = useAtomValue(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = async (index: number): Promise<void> => {
    setSelectedNoteIndex(index)
    if (onSelect) onSelect()
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
