import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

export const AddModal = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    main_img: "",
    second_img: "",
    description: "",
    rate: 1,
    date: "",
    duration: 0,
    genre: "",
  });
  const onStarClick = (nextValue, prevValue, name) => {
    setNewMovie({ ...newMovie, rate: nextValue });
  };

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange} name="title" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Main Image URL</Form.Label>
            <Form.Control onChange={handleChange} name="main_img" />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Second Image URL</Form.Label>
            <Form.Control onChange={handleChange} name="second_img" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Duration</Form.Label>
              <Form.Control onChange={handleChange} name="duration" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                name="genre"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>Action</option>
                <option>Drame</option>
                <option>Comedy</option>
                <option>Romance</option>
                <option>War</option>
                <option>Thriller</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Year</Form.Label>
              <Form.Control onChange={handleChange} name="date" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Rating</Form.Label>
            <StarRatingComponent
              onChange={handleChange}
              name="rate1"
              starCount={5}
              value={newMovie.rate}
              onStarClick={onStarClick}
            />
          </Form.Row>
          <Form.Row>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="description"
            />
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addMovie(newMovie);
            handleClose();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
