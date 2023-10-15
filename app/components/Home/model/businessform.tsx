import { HtmlHTMLAttributes, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { experimental_useFormStatus as useFormState } from 'react-dom';
export const BusinessFormComponent = ({show,onclose}:any)=>{
    // const [name,setname] = useState<string>('')
    // const [number,setnumber] = useState<string>('')
    // const [email,setemail] = useState<string>('')
    // const [message,setmessage] = useState<string>('')
    // const handleNameChange = (e:any)=>{
    //     setname(e.target.value)
    // };
    // const handleEmailChange = (e:any)=>{ setemail(e.target.value)}
    // const handleNumberChange = (e:any)=>{ setnumber(e.target.value)}
    // const handleMessageChange = (e:any)=>{ setmessage(e.target.value)}
    // const handleSubmit=async (e:any)=>{
    //     e.preventDefault();
    //     const enquireData = {
    //         name,
    //         number,
    //         email,
    //         message
    //     }
    //     try {
    //         const response = await fetch('/api/submitenquire',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify(enquireData)
    //         });
    //         if(response.status === 200){
    //             console.log('Form submitted')
    //         }else{
    //             console.log('Failed to submit enquire');
    //         }
    //     } catch (error) {
    //         console.error("Network or server error")
    //     }
    // }
    
    const handlesubmit = (formdata:FormData)=>{
      const name = formdata.get('username');
      const email = formdata.get('email');
      const number = formdata.get('number');
      const message = formdata.get('message');
       const obj = {
        name,email,number,message
       }  
      console.log("Data submitted: ",obj)
      fetch('https://script.google.com/macros/s/AKfycbxRyG0l7bcyWKN_Qv7iSWppTuYrReX6NM0Dbr0csAhZqnsImgaNQfcOibkFXbLxrm5e/exec', {
        redirect: "follow",
        method: 'POST',
        mode:'no-cors',
        body: JSON.stringify(formdata),
})
  .then((response) => {
    if(response.ok){
      console.log("Data submitted successfully")
    }else{
      console.log("Data not submitted successfully")
    }
  })

  .catch((error) => {
    console.error('Error sending data to Google Sheets:', error);
  });
    }
    return <>
          <Modal show={show} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquire Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe45Tz6RPK7BeaHJ2IEDQ-k7R3RLz29cwfpZS6NRXjFgjHvKw/viewform?embedded=true"
            title="Contact Form"
            width="100%"
            height="500"
          >Loading</iframe>
        </Modal.Body>
      </Modal>
    </>
}