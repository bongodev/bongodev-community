import PropTypes from "prop-types";
import { Images } from "./Images"
import { SocialAccounts } from "./Socials"

export function CreateCard({cardData}) {
  return (
 <div className="bg-[#FFE5B4] p-6 flex flex-col items-start gap-2 w-[500px] border border-gray-300 rounded-xl shadow-md hover:shadow-lg">
          <Images source={cardData.image} alterText={cardData.name}/>
          <h2 className="text-xl font-semibold text-gray-900">{cardData.name}</h2>
          <p className="text-gray-800">{cardData.about}</p>
          <SocialAccounts socials={cardData.socials}/>
          </div>
  )
}
CreateCard.propTypes ={
    cardData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        about : PropTypes.string.isRequired,
        socials: PropTypes.shape({
            linkedin: PropTypes.string.isRequired,
            github: PropTypes.string.isRequired,
            portfolio: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
}
