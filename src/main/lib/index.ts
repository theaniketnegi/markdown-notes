import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'os'
import { appDirectoryName, fileEncoding } from 'src/shared/constants'
import { NoteInfo } from 'src/shared/models'

export const getRootDir = (): string => {
  return `${homedir()}/${appDirectoryName}`
}

export const getNotes = async (): Promise<NoteInfo[]> => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((filename) => filename.endsWith('.md'))
  return Promise.all(notes.map(getNoteInfo))
}

export const getNoteInfo = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}
