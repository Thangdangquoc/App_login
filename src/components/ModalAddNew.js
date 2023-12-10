import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { postUser } from '../services/UserServices';
import { toast } from 'react-toastify';


const ModeAddNew = (props) => {
    const { show, handleClose, handleUser } = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const handleSaveUser = async () => {
        let res = await postUser(name, job)
        console.log("res ", res)
        if (res && res.id) {
            handleClose()
            setName('')
            setJob('')
            toast.success("A User is creat success!")
            handleUser({ first_name: name, id: res.id });
        } else {
            toast.error("User is creat error!")
        }

    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='body-add-new'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name}
                            onChange={(event) => setName(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job" value={job}
                            onChange={(event) => setJob(event.target.value)} />
                    </Form.Group>


                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default ModeAddNew;