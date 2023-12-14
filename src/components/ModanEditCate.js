import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { saveCate } from "../services/CategoryService";
import { toast } from "react-toastify";

const ModeEditCate = (props) => {
  const { show, handleClose, dataEditCate } = props;
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [translate, setTranslate] = useState("");
  const [description, setDescription] = useState("");
  const handleSaveCate = async () => {
    let res = await saveCate(name, symbol, translate, description);
    console.log("res ", res);
    if (res && res.Errors.message === "SUCCESS") {
      handleClose();
      setName("");
      setSymbol("");
      setTranslate("");
      setDescription("");
      toast.success("A Category is creat success!");
      window.location.reload();
    } else {
      toast.error("Category is creat error!");
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Symbol</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Symbol"
                value={symbol}
                onChange={(event) => setSymbol(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Translate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Translate"
                value={translate}
                onChange={(event) => setTranslate(event.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveCate()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModeEditCate;
