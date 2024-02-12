import { NoteInfo } from 'src/shared/models'
import { atom } from 'jotai'
import { notesMock } from './mocks'

export const notesAtom = atom<NoteInfo[]>(notesMock)
export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const index = get(selectedNoteIndexAtom)
  if (index === null) return null
  const selectedNote = notes[index]
  return {
    ...selectedNote,
    content: `# ${selectedNote.title}`
  }
})
