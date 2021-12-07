import React, { useState, Component } from "react";
//import "@asseinfo/react-kanban/dist/styles.css";
import Modal from "../Modal/Modal";

const testDescription = `
Coinbase has built the world's leading compliant cryptocurrency platform serving over 73 million accounts in more than 100 countries. With multiple successful products, and our vocal advocacy for blockchain technology, we have played a major part in mainstream awareness and adoption of cryptocurrency. We are proud to offer an entire suite of products that are helping build the cryptoeconomy and increase economic freedom around the world.
There are a few things we look for across all hires we make at Coinbase, regardless of role or team. First, we look for signals that a candidate will thrive in a culture like ours, where we default to trust, embrace feedback, disrupt ourselves, and expect sustained high performance because we play as a championship team. Second, we expect all employees to commit to our mission-focused approach to our work. Finally, we seek people with the desire and capacity to build and share expertise in the frontier technologies of crypto and blockchain, in whatever way is most relevant to their role.
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: false,
    };
  }
  render() {
    const { show } = this.state;
    console.log(this.props.card);
    return (
      <div
        className={`react-kanban-card ${
          this.props.dragging ? "react-kanban-card--dragging" : ""
        }`}
      >
        <span>
          <div className="react-kanban-card__title">
            {this.props.card.title ? (
              <span>{this.props.card.title}</span>
            ) : null}
            {this.props.card.job_title ? (
              <span>{this.props.card.job_title}</span>
            ) : null}
            {
              <span
                style={{ cursor: "pointer" }}
                onClick={() => this.props.removeCard(this.props.card)}
              >
                ×
              </span>
            }
          </div>
        </span>
        <div onClick={() => this.setState({ show: true })}>
          <div className={"react-kanban-card__description"}>
            {this.props.card.description}
          </div>
          {this.props.card.company_name ? (
            <div style={{ fontSize: "18px" }}>
              {this.props.card.company_name}
            </div>
          ) : null}
          {this.props.card.job_location ? (
            <div style={{ fontSize: "18px", color: "grey" }}>
              {this.props.card.job_location}
            </div>
          ) : null}
          {this.props.card.application_date || this.props.card.pay ? (
            <br />
          ) : null}
          {this.props.card.application_date ? (
            <div style={{ fontSize: "18px" }}>
              {"Applied:"} {this.props.card.application_date}
            </div>
          ) : null}
          {this.props.card.job_pay ? (
            <div style={{ fontSize: "18px" }}>
              {"Pay: "}
              {this.props.card.job_pay}
            </div>
          ) : null}
          <Modal
            onClose={() => this.setState({ show: false })}
            show={this.state.show}
            company_name={this.props.card.company_name}
            job_title={this.props.card.job_title}
            description={this.props.card.job_description}
            pay_range={this.props.card.job_pay}
            published={this.props.card.job_published_date}
            location={this.props.card.job_location}
            applied={this.props.card.application_date}
          />
        </div>
      </div>
    );
  }
}

export default Card;
