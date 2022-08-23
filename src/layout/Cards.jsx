import Card from '../components/Card';
import { cards } from '../helpers';

const Cards = () => {

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  }
  
  return (
    <main 
      className="container">
      <div 
        className="cards">
        {
          cards.map(card => (
            <Card
              key={generateId()} 
              image={card.image}
              bg={card.bg}
              heading={card.heading}
              text={card.text}
              button={card.button}
              type={card.type}
              order={card.order}
            />
          ))
        }
      </div>
    </main>
  );
};

export default Cards;
