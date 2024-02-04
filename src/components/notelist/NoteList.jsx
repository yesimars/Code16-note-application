import React, { useContext } from 'react'
import { NoteContext } from '../../notecontext/NoteContext'
import { REMOVE_NOTE, EDIT_NOTE } from '../note'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { ListContainer } from './NoteListSty';
import styled from 'styled-components';

const Container1 = styled.div`
  flex: 1;
  background-color: transparent;
  padding: 1rem;
  margin: 5px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

function NoteList() {
  const { notes: { state, dispatch } } = useContext(NoteContext)
  return (
    <>
      <h2 style={{color:'white'}}><center>Notlarım</center></h2>
      <input type="search" placeholder='Not Ara...' style={{marginLeft:'40%', width:'300px', height:'30px',borderRadius:'30px',borderColor:'#BDBBD7'}}/>
      <Container1>
      {state?.notes?.map((item) =>
        <ListContainer>
          <div>
            <p key={item.id}>{item.title}</p>
            <div>
              <span >
              <MdEdit size="1.3em" style={{ margin: '10px 0px 5px 250px', padding: '28px 0px 5px 25px' }}
                onClick={() => dispatch({ type: EDIT_NOTE, payload: item.id })} 
                />
              </span>
              <span>
              <MdDeleteForever size="1.3em" style={{ margin: '0px 0px 0px 250px', padding: '0px 0px 0px 25px'}}
                onClick={() => dispatch({ type: REMOVE_NOTE, payload: item.id })} />  
            </span>
            </div>
          </div>
        </ListContainer>
      )}
      </Container1>
    </>
  )
}

export default NoteList