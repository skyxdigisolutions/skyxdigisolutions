import Script from 'next/script';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
export const CareerFormComponent = ({show,onclose}:any)=>{

    return <>
          <Modal show={show} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeeVAM54AGEDHpTEZql430GwvFkX3YuJ3bh9uL5_gHHr8vVkg/viewform?embedded=true" width="100%" height="500">Loading…</iframe>
        </Modal.Body>
      </Modal>
    </>
}