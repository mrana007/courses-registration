import PropTypes from 'prop-types'

const Credit = ({credit, index}) => {
    const {title} = credit;
    const courseSerial = index +1;
    return (
        <div>
            <div>{courseSerial}. {title}</div>
            
        </div>
    );
};
Credit.propTypes ={
    credit: PropTypes.object,
    index: PropTypes.number
}

export default Credit;