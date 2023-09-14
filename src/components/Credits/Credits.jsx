import PropTypes from 'prop-types'
import Credit from '../Credit/Credit';

const Credits = ({credits}) => {
    return (
        <div className="md:w-1/4 h-min bg-white rounded-md px-6 pt-4 pb-6">
            <h2 className="font-bold text-sm">Course Name</h2>
            {
                credits.map(credit => <Credit key={credit.id} credit={credit}></Credit>)
            }
        </div>
    );
};
Credits.propTypes ={
    credits: PropTypes.array
}
export default Credits;