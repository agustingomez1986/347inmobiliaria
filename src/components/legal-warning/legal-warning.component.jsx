import { Fragment } from 'react';

import './legal-warning.styles.scss'

const LegalWarning = () => {
  return(
    <Fragment>
      <div className='avisoLegal'>Aviso Legal / Disclaimer - 347 Inmobiliaria y/o la Corredora Inmobiliaria María Teresa Cortada titular de 347 Inmobiliaria (en adelante 347 Inmobiliaria) deja constancia que este documento, y la información que contiene es general y corresponde a la fecha de emisión del informe, las medidas y superficies son aproximadas, y la información está sujeta a cambios sin previo aviso. 347 Inmobiliaria no se responsabiliza ni se encuentra obligado a notificar tales cambios o actualizar los contenidos del presente. No ha sido emitido para entregar a clientes particulares. No se garantiza que la información que incluye sea exacta y completa. Este documento y sus contenidos no constituyen una oferta, invitación o solicitud para la compra, ni para decidir o modificar inversiones. Bajo ningún concepto este documento o su contenido constituyen la base para un contrato, compromiso o decisión de cualquier tipo. Los contenidos de este documento se basan en información disponible de manera pública y que ha sido obtenida de fuentes consideradas confiables. No obstante, tal información no ha sido verificada en forma independiente por 347 Inmobiliaria y, en consecuencia, no puede proveerse una garantía, ni expresa ni implícita, respecto de su precisión o integridad. La información precisa surgirá del título de propiedad y los Registros Provinciales y Municipales.</div>
    </Fragment>
  );
}

export default LegalWarning;