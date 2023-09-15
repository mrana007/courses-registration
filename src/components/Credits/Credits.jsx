import PropTypes from 'prop-types'
import Credit from '../Credit/Credit';

const Credits = ({credits, remaining, totalCredit}) => {
    return (
        <div className="md:w-1/4 h-min bg-white rounded-md px-6 pt-4 pb-6">
            <h1 className='text-blue-500 font-bold text-lg border-b-2 pb-4'>Credit Hour Remaining {remaining} hr</h1>
            <h2 className="font-bold text-xl">Course Name</h2>
            
            {
                credits.map((credit, index) => <Credit key={credit.id} credit={credit} index={index}></Credit>)
                
            }
            <div className='border-t-2'>Total Credit Hour: {totalCredit}</div>
           
        </div>
    );
};
Credits.propTypes ={
    credits: PropTypes.array,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number
}
export default Credits;