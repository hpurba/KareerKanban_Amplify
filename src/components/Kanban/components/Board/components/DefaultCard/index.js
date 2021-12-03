export default function ({ children: card, dragging, allowRemoveCard, onCardRemove }) {
  return (
    <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
      <span>
        <div className='react-kanban-card__title'>
          {card.title ? <span>{card.title}</span> : null}
          {card.company_name ? <span>{card.company_name}</span> : null}
          {allowRemoveCard && (
            <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
              ×
            </span>
          )}
        </div>
      </span>
      <div className='react-kanban-card__description'>{card.description}</div>
      {card.job_title ? <div>{card.job_title}</div> : null}
      {card.job_location ? <div>{card.job_location}</div> : null}
      {card.application_name ? <div>{card.application_name}</div> : null}
      {card.application_contact ? <div>{card.application_contact}</div> : null}
    </div>
  )
}
