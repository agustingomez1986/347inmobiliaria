import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

import { DataToSendContext } from '../../context/data-to-send.context.jsx';

import './contact-form.styles.scss';

const ContactForm = () => {                              
  const {contactDataToSend, setContactDataToSend} = useContext(DataToSendContext);
  const [viewSentMessage, setViewSentMessage ] = useState(false);
  
  const { idPage } = useParams();
  var propId;
  if (idPage != null){
    try {
      propId = JSON.parse(idPage);
    } catch {
      propId = idPage;
    }
  } else {
    propId = 0;
  }
  
  // if (idPage != null){
  //   propId = JSON.parse(idPage);
  // } else {
  //   propId = 0;
  // }
  
  const fileSendPath = 'https://www.347inmobiliaria.com/send.php';

  useEffect(() => {
    setContactDataToSend({ ...contactDataToSend, contactPropId: propId });
  },[]);

  const handleFormSubmit = ( event ) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `${fileSendPath}`,
      headers: { 'content-type': 'application/json' },
      data: contactDataToSend,
    })
      .then(result => {
        setContactDataToSend({ ...contactDataToSend, contactSent: true });
        handleViewMessageState(event);
        console.log('contactdata3: ', contactDataToSend);
      })
      .catch(error => setContactDataToSend({ ...contactDataToSend, contactError: error.message
    }));
  };

  const handleViewMessageState = (event) => {
    event.preventDefault();
    setViewSentMessage(!viewSentMessage);
  }

  return (
    <div>
      <fieldset className="contact-form-box">
        <input
          className="contact-input"
          id="contact-name"
          type="text"
          name="contact-name"
          placeholder="Nombre"
          maxLength="40"
          pattern="^([A-ZÑÇÁÉÍÓÚÜa-zñçáéíóúü\s]*)([A-ZÑÇÁÉÍÓÚÜa-zñçáéíóúü]+)(\s*){1,40}"
          title="El nombre solo debe contener letras"
          required
          data-tipo="contactName"
          onChange={e => setContactDataToSend({
            ...contactDataToSend,
            contactName: e.target.value,
            contactError: null,
            contactSent: false,
          })}
        />
        <label className="contact-label" htmlFor="contact-name">Nombre</label>
        <span className="contact-input-error"></span>
      </fieldset>
      <fieldset className="contact-form-box">
        <input
          className="contact-input"
          id="contact-email"
          type="email"
          name="contact-email"
          placeholder="ejemplo@ejemplo.com"
          required
          data-tipo="contactEmail"
          onChange={e => setContactDataToSend({
            ...contactDataToSend,
            contactEmail: e.target.value,
            contactError: null,
            contactSent: false,
          })}
        />
        <label className="contact-label" htmlFor="contact-email">E-Mail</label>
        <span className="contact-input-error"></span>
      </fieldset>
      <fieldset className="contact-form-box">
        <input
          className="contact-input"
          id="contact-phoneNumber"
          type="tel"
          name="contact-phoneNumber"
          placeholder="Teléfono"
          pattern="[0-9]*"
          required
          data-tipo="contactPhoneNumber"
          onChange={e => setContactDataToSend({
            ...contactDataToSend,
            contactPhoneNumber: e.target.value,
            contactError: null,
            contactSent: false,
          })}
        />
        <label className="contact-label" htmlFor="contact-phoneNumber">Teléfono</label>
        <span className="contact-input-error"></span>
      </fieldset>
      <fieldset className="contact-textarea-box">
        <textarea
          className="contact-textarea"
          id="contact-message"
          name="contact-message"
          placeholder="Escribe tu mensaje"
          maxLength="120"
          required
          data-tipo="contactMessage"
          onChange={e => setContactDataToSend({
            ...contactDataToSend,
            contactMessage: e.target.value,
            contactError: null,
            contactSent: false,
          })}
        />
        <label className="contact-label" htmlFor="contact-message">Mensaje</label>
        <span className="contact-textarea-error"></span>
      </fieldset>
      <input className="contact-button" type="submit" onClick={e => handleFormSubmit(e)} value='ENVIAR' />
      <div>
        {viewSentMessage &&
          <div className='contact-sent-message-ty-container' onClick={e => handleViewMessageState(e)}>
            <div className='contact-sent-message-ty'>Gracias por contactarte con nosotros</div>
          </div>
        }
      </div>
    </div>
  )
}

export default ContactForm;