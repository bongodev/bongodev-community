import PropTypes from 'prop-types';
export function Images({ source, alterText }) {
  return <img className="w-24 h-24 rounded-xl" src={source} alt={alterText} />;
}
Images.propTypes = {
  source: PropTypes.string.isRequired,
  alterText: PropTypes.string.isRequired,
};
