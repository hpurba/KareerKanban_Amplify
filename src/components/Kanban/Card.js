import React, { Component } from "react";
import "@asseinfo/react-kanban/dist/styles.css";

class Card extends Component {
  render() {
    console.log(this.props.card);
    return (
      <div className={`react-kanban-card ${this.props.dragging ? 'react-kanban-card--dragging' : ''}`}>
        <span>
          <div className='react-kanban-card__title'>
            <span>{this.props.card.title}</span>
            {this.props.allowRemoveCard && (
              <span style={{ cursor: 'pointer' }} onClick={() => this.props.removeCard}>
                ×
              </span>
            )}
          </div>
        </span>
        {this.props.card.job_title ? <div>Job Title: {this.props.card.job_title}</div> : null}
        {this.props.card.company_name ? <div>Company: {this.props.card.company_name}</div> : null}
        <div className='react-kanban-card__description'>{this.props.card.description}</div>
      </div>
    );
  }
}

export default Card;
