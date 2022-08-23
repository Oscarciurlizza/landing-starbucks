import Heading from './Heading'
import Text from './Text'
import Button from './Button'
import Image from './Image'

const Card = ({ bg, order, heading, text, button, type, image }) => {
  return (
    <div
      className='card'>
      <div
        className={`card-left ${bg} ${order ? 'order' : ''} `}>
        <Heading
          heading={heading} 
        />
        <Text
          text={text} 
        />
        <Button 
          button={button}
          type={type}
        />
      </div>
      <div
        className='card-right'>
        <Image 
          image={image}
        />
      </div>
    </div>
  )
}

export default Card