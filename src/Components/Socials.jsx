import PropTypes from 'prop-types';
const socialPlatforms = [
  {
    name: 'linkedin',
    class: 'bx bxl-linkedin  bg-[#0072B1] p-[3px] text-white',
  },
  {
    name: 'github',
    class: 'bx bxl-github bg-black p-[3px] text-white',
  },
  {
    name: 'portfolio',
    class: 'bx bxs-user bg-cyan-600 p-[3px] text-white',
  },
];
export function SocialAccounts({ socials, portfolioName}) {
  return (
    <div className="social flex gap-6 mt-4">
      {socialPlatforms.map((social) => (
        <a
          key={social.name}
          className="flex justify-center items-center gap-1 p-2 rounded-md hover:bg-[#5495d6] hover:text-white"
          href={socials[social.name]}
        >
          <i className={social.class}></i>
          <p> {social.name === 'portfolio' ? portfolioName : social.name}</p>
        </a>
      ))}
    </div>
  );
}
SocialAccounts.propTypes = {
  socials: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    portfolio: PropTypes.string.isRequired,
  }).isRequired,
};
