import Navbar from '../components/Navbar'
import Button from "../components/Button"

const Header = () => {
  return (
    <header
      className='header'>
      <div 
        className="container">
        <div 
          className="flex">
          <Navbar />
          <div 
            className="tools">
            <span>
              Find a store
            </span>
            <Button
              button='sign-in'
              type='sign-in' 
            />
            <Button
              button='join-now'
              type='join-now' 
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header