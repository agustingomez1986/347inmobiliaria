import ContactForm from '../../components/contact-form/contact-form.component.jsx';

import './contact.styles.scss';

const Contact = () => {

  return(
    <div className="contact-container">
      <h1 className="contact-title">
        CONTACTANOS
      </h1>
      <form className='contact-form-container' action='#'>
        <legend className='contact-legend'>
          Para contactarnos podés completar el siguiente formulario y nos vamos a estar comunicando con vos a la brevedad.
        </legend>
        <ContactForm />
      </form>
    </div>
  )
}

export default Contact;