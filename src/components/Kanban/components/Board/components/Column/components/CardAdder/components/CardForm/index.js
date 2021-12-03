import React from 'react'
import { useRef } from 'react'
import { when } from '../../../../../../../../services/utils'

function CardForm({ onConfirm, onCancel }) {
  const inputCompanyName = useRef()
  const inputJobTitle = useRef()
  const inputJobLocation = useRef()
  const inputApplicationName = useRef()
  const inputApplicationContact = useRef()

  function addCard(event) {
    event.preventDefault()
    when(inputCompanyName.current.value)((value) => {
      onConfirm({ 
        company_name: value, 
        job_title: inputJobTitle.current.value, 
        job_location: inputJobLocation.current.value,
        application_name: inputApplicationName.current.value,
        application_contact: inputApplicationContact.current.value 
      })
    })
  }

  return (
    <div className='react-kanban-card-adder-form'>
      <form onSubmit={addCard}>
        <input
          className='react-kanban-card-adder-form__title'
          name='company_name'
          autoFocus
          defaultValue='Company Name'
          ref={inputCompanyName}
        />
        <input
          className='react-kanban-card-adder-form__title'
          name='job_title'
          autoFocus
          defaultValue='Job Title'
          ref={inputJobTitle}
        />
        <input
          className='react-kanban-card-adder-form__title'
          name='job_location'
          defaultValue='Job Location'
          ref={inputJobLocation}
        />
        <input
          className='react-kanban-card-adder-form__title'
          name='application_name'
          defaultValue='Application Name'
          ref={inputApplicationName}
        />
        <input
          className='react-kanban-card-adder-form__title'
          name='application_contact'
          defaultValue='Application Contact'
          ref={inputApplicationContact}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <button className='react-kanban-card-adder-form__button' type='submit'>
            Add
          </button>
          <button className='react-kanban-card-adder-form__button' type='button' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
