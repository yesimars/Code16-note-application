import React, { useContext } from 'react'
import { ADD_NOTE, EDIT_NOTE } from '../note';
import { NoteContext } from '../../notecontext/NoteContext';
import { FormContainer } from './NoteFormSty';

function NoteForm() {
  const { notes: { dispatch } } = useContext(NoteContext)
  

  function handleSubmit(event) {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    dispatch({ type: ADD_NOTE, payload: inputValue })
    event.target.reset()
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              cols="35"
              rows="10"
              placeholder='Not giriniz'
            ></textarea>
            <div>
              <button type='submit'>KAYDET</button>
            </div>
          </div>
        </form>
      </FormContainer>
    </>
  )
}

export default NoteForm