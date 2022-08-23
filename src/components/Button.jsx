const Button = ({ button, type }) => {
  return (
    <div
      className= 'button'>
      <button
        className={`${type}`}
        href='#'
      >
        {
          button
        }
      </button>
    </div>
  )
}

export default Button