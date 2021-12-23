import React, { useState } from "react";
import { FormControl, Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {BiCalendarEdit}from'react-icons/bi'

const Update=({task})=> {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edit, setEdit] = useState(task.description);
    const EditTask = ()=>{
        dispatch({type: "edit",payload:{newDesc:edit,id:task.id}})  
        handleClose();
    }

    return (
        <>
            <button className="Add"  onClick={handleShow}>
               <BiCalendarEdit/>
            </button>

            <Modal show={show} onHide={handleClose} animation={false} >
                <Modal.Header closeButton>
                    <Modal.Title style={{color:'#271c6c'}}>Edit a task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                   
                        <FormControl
                            type="text"
                            placeholder="edit task"
                            className="Input"
                            defaultValue={task.description}
                            onChange={(e)=>setEdit(e.target.value)}
                            style={{color:'#271c6c'}}
                        
                        />
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" style={{backgroundColor:"rgb(169, 91, 189)"}} onClick={EditTask}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Update;
