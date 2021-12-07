import React from "react";
import "./Modal.css";
import { Button } from "react-bootstrap";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>
            {props.job_title ? (
              <div>
                {props.job_title} at {props.company_name}
              </div>
            ) : null}
          </h4>
        </div>
        <div className="modal-body">
          {props.job_title ? <div>Job Title: {props.job_title}</div> : null}
          {props.company_name ? <div>Company: {props.company_name}</div> : null}
          {props.pay_range ? <div>Pay Range: {props.pay_range}</div> : null}
          {props.published ? <div>Published: {props.published}</div> : null}
          {props.location ? <div>Location: {props.location}</div> : null}
          {props.applied ? <div>Applied: {props.applied}</div> : null}
          <br />
          <br />
          {props.description ? (
            <div>Description: {props.description}</div>
          ) : null}
        </div>
        <div className="modal-footer">
          <Button variant="outline-secondary" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
