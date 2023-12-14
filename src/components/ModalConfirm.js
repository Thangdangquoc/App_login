import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteCate, deleteCateParam } from "../services/CategoryService";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
  const { show, handleClose, dataDeleteCate } = props;

  const handleDeleteCate = async () => {
    console.log("id:", dataDeleteCate.id);
    let res = await deleteCate(dataDeleteCate.id);
    console.log("dlete", res);

    if (res && res.Errors.message === "DELETE SUCCESS") {
      handleClose();
      toast.success("A Category is delete success!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Category is delete error!");
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
          <Modal.Title>Delete category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            Do want to delete this category ?
            <h5>Categoy = {dataDeleteCate.name}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteCate()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
