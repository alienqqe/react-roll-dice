import PropTypes from 'prop-types'

export const Result = ({text1, text2}) => {


    return (
    <div>
        <div className='result1'>{text1}</div>
        <div className='result2'>{text2}</div>
    </div>
  )
};

Result.defaultProps = {
  text1: 0,
  text2: 0
}

Result.propTypes = {
    result1: PropTypes.number,
    result2: PropTypes.number
 }
