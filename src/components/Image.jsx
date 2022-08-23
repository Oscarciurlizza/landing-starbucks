const Image = ({ image }) => {
  return (
    <div
      className='image'>
      <img 
        src={image}
        alt={`${image}-img`}
      />
    </div>
  )
}

export default Image