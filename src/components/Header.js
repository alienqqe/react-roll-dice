import PropTypes from 'prop-types'

 
export const Header = ({title}) =>{
  return (
    <header>
    <h1>{title}</h1>
    </header>
  )
}

 Header.defaultProps = {
     title: 'Dice game'
 }

Header.propTypes = {
    title: PropTypes.string
 }
