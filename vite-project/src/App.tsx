import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { NewNote } from './NewNote'
import { useEffect } from 'react';

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string,
}

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {

  const [notes, setNotes] = useLocalStorag<RawNote[]>('NOTES', [])
  const [tags, setTags] = useLocalStorag<Tag[]>('TAGS', [])

  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route path='/new' element={<NewNote />}>New</Route>
        <Route path='/*' element={<Navigate to='/' />}>New</Route>
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>}/>
          <Route path='edit' element={<h1>Edit</h1>}/>
        </Route>
      </Routes>
    </Container>
  )
}

export default App
