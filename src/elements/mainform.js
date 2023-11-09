import React, { useState } from 'react'

export default function Mainform() {

const [nameField, setNameField] = useState('');
const [mailField, setMailField] = useState('');
const [textField, setTextField] = useState('');


const sendData = () => {
  fetch('http://localhost:8080/', {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify({'name': nameField, 'mail': mailField, 'text': textField}),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(
    (response) => {
      return response.json();
    }
  ).then((data) => {
    console.log(data)
  })
}



  return (
    <div id="mainform">
      <div id='text'>Reach out to us!</div>
      <input className='input' placeholder='Your name*' onChange={e => {setNameField(e.target.value)}}></input>
      <input className='input' placeholder='Your e-mail*' onChange={e => {setMailField(e.target.value)}}></input>
      <textarea className='input' id ='msg' placeholder='Your message*' onChange={e => {setTextField(e.target.value)}}></textarea>
      <button id='button' onClick={() => {sendData()}}>Send message</button>
    </div>
  )
}
