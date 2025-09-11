import PropTypes from 'prop-types';
import ChildB from '../ChildB'

const ChildA = ({ sName }) => {

    return (
        <div>
            A
            <ChildB sName={sName} />
        </div>
    )
}

ChildA.propTypes = {
    sName: PropTypes.string
}


export default ChildA
