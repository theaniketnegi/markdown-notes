import { Button } from './Button'
import { FaRegTrashCan } from 'react-icons/fa6'
import { LuFileSignature } from 'react-icons/lu'
const ActionButtonRow = (): React.ReactNode => {
  return (
    <div className="justify-between flex">
      <Button>
        <LuFileSignature className="w-4 h-4 text-zinc-300" />
      </Button>
      <Button>
        <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
      </Button>
    </div>
  )
}

export default ActionButtonRow
