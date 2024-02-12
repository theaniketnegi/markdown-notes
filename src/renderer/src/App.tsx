import { Content, RootLayout, Sidebar } from './components/AppLayout'
import ActionButtonRow from './components/Button/ActionButtonRow'
import Editor from './components/Editor'
import NotesList from './components/NotesList'

function App(): React.ReactNode {
  return (
    <RootLayout>
      <Sidebar className="p-2 bg-[#27292F]">
        <ActionButtonRow />
        <NotesList />
      </Sidebar>
      <Content className="border-l bg-[#1b1e22] border-l-white/20">
        <Editor />
      </Content>
    </RootLayout>
  )
}

export default App
