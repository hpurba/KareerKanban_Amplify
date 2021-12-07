import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, Input, Label } from "reactstrap";

function CardForm({ onConfirm, onCancel }) {
  function addCard(event) {
    event.preventDefault();
    onConfirm({
      job_title: event.target[0].value,
      company_name: event.target[1].value,
      job_location: event.target[2].value,
      job_type: event.target[3].value,
      job_pay: event.target[4].value,
      job_published_date: event.target[5].value,
      application_date: event.target[6].value,
      job_description: event.target[7].value,
    });
  }

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>Add New Application</Modal.Header>
      <Form onSubmit={addCard}>
        <Modal.Body>
          <Label for="job_title">Job Title</Label>
          <Input
            type="text"
            name="job_title"
            id="job_title"
            placeholder="Software Developer"
          />
          <Label for="company_name">Company</Label>
          <Input
            type="text"
            name="company_name"
            id="company_name"
            placeholder="Vandelay Industries"
          />
          <Label for="location">Location</Label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="Salt Lake City, Utah"
          />
          <Label for="job_type">Type(Full-Time, Internship, Etc.)</Label>
          <Input
            type="text"
            name="job_type"
            id="job_type"
            placeholder="Full-Time"
          />
          <Label for="pay_range">Pay or Pay Range</Label>
          <Input
            type="text"
            name="pay_range"
            id="pay_range"
            placeholder="$80,000"
          />
          <Label for="job_date">Date Job Published</Label>
          <Input
            type="text"
            name="job_date"
            id="job_date"
            placeholder="11/11/2021"
          />
          <Label for="app_date">Application Date</Label>
          <Input
            type="text"
            name="app_date"
            id="app_date"
            placeholder="12/8/2021"
          />
          <Label for="job_description">Job Description</Label>
          <Input
            type="textarea"
            name="job_description"
            id="job_description"
            placeholder="The job requirements are..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="outline-primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CardForm;
