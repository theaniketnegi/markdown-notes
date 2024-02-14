import { useSetAtom } from 'jotai'
import { Button } from './Button'
import { FaRegTrashCan } from 'react-icons/fa6'
import { LuFileSignature } from 'react-icons/lu'
import { createEmptyNoteAtom, deleteNoteAtom } from '@renderer/store'
const ActionButtonRow = (): React.ReactNode => {
  const createNewNote = useSetAtom(createEmptyNoteAtom)
  const handleCreation = (): void => {
    createNewNote()
  }

  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleDeletion = (): void => {
    deleteNote()
  }

  return (
    <div className="justify-between flex">
      <Button onClick={handleCreation}>
        <LuFileSignature className="w-4 h-4 text-zinc-300" />
      </Button>
      <Button onClick={handleDeletion}>
        <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
      </Button>
    </div>
  )
}

export default ActionButtonRow
