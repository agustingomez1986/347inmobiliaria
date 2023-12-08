export const TemplateCasaChacra = ({data}) => {
  const { id, title, name, address, images, description, price, size, build, cover, rooms, bedrooms, bathroom, storage, garage, floors, orientation, antiquity } = data;

  return (
    <div>
      <ul>
          <li>Tipo de propiedad: {title}</li>
          <li>Barrio: {address}</li>
          <li>Area del terreno: {size}</li>
          <li>Total construido: {build}</li>
          <li>Superficie cubierta: {cover}</li>
          <li>Ambientes: {rooms}</li>
          <li>Dormitorios: {bedrooms}</li>
          <li>Baños: {bathroom}</li>
          <li>Antigüedad: {antiquity}</li>
          <li>Plantas: {floors}</li>
          <li>Cochera: {garage}</li>
        </ul>
    </div>
  )
}

export const TemplateDepartamento = ({data}) => {
  const { id, title, name, address, images, description, price, size, build, cover, rooms, bedrooms, bathroom, storage, garage, floors, orientation, antiquity } = data;

  return (
    <div>
      <ul>
          <li>Tipo de propiedad: {title}</li>
          <li>Barrio: {address}</li>
          <li>Area del terreno: {size}</li>
          <li>Total construido: {build}</li>
          <li>Superficie cubierta: {cover}</li>
          <li>Ambientes: {rooms}</li>
          <li>Dormitorios: {bedrooms}</li>
          <li>Baños: {bathroom}</li>
          <li>Antigüedad: {antiquity}</li>
          <li>Plantas: {floors}</li>
          <li>Cochera: {garage}</li>
        </ul>
    </div>
  )
}

export const TemplateDeposito = ({data}) => {
  const { id, title, name, address, images, description, price, size, build, cover, rooms, bedrooms, bathroom, storage, garage, floors, orientation, antiquity } = data;

  return (
    <div>
      <ul>
          <li>Tipo de propiedad: {title}</li>
          <li>Barrio: {address}</li>
          <li>Area del terreno: {size}</li>
          <li>Total construido: {build}</li>
          <li>Superficie cubierta: {cover}</li>
          <li>Ambientes: {rooms}</li>
          <li>Dormitorios: {bedrooms}</li>
          <li>Baños: {bathroom}</li>
          <li>Antigüedad: {antiquity}</li>
          <li>Plantas: {floors}</li>
          <li>Cochera: {garage}</li>
        </ul>
    </div>
  )
}

export const TemplateTerreno = ({data}) => {
  const { id, title, name, address, images, description, price, size, access, distanceToAsphalt, orientation } = data;

  return (
    <div>
      <ul>
        <li>Tipo de propiedad: {title}</li>
        <li>Barrio: {address}</li>
        <li>Area del terreno: {size}</li>
        <li>Acceso: {access}</li>
        <li>Distancia al asfalto: {distanceToAsphalt}</li>
        <li>Orientación: {orientation}</li>
      </ul>
    </div>
  )
}