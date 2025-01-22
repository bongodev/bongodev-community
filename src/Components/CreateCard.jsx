import PropTypes from 'prop-types';
import { Images } from './Images';
import { SocialAccounts } from './Socials';

export function CreateCard({ cardData }) {
  return (
    <div className={`${cardData.background} p-6 flex flex-col items-start gap-2 w-[500px] border border-gray-300 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300`}
    style={{backgroundColor: cardData.class}}
    >
      <Images source={cardData.image} alterText={cardData.name} />
      <h2 className="text-xl font-semibold text-gray-900">{cardData.name}</h2>
      <p className="text-gray-800">{cardData.about}</p>
      <SocialAccounts socials={cardData.socials} portfolioName={cardData.name} />
    </div>
  );
}
CreateCard.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    socials: PropTypes.shape({
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      portfolio: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
