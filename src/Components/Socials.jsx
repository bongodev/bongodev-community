const socialPlatforms = [
     {
        name: 'linkedin',
        class: 'bx bxl-linkedin  bg-[#0072B1] p-[3px] text-white'
      },
      {
        name: 'github',
        class: 'bx bxl-github bg-black p-[3px] text-white'
      },
      {
        name: 'portfolio',
        class: 'bx bxs-user bg-cyan-600 p-[3px] text-white'
      },
]
export function SocialAccounts({socials}){
    return(
    <div className="social flex gap-6 mt-4">
           {socialPlatforms.map((social)=>(
            
             <a key={social.name} className="flex justify-center items-center gap-1" href={socials[social.name]}>
             <i className={social.class}></i>
             <p>{social.name}</p>
             </a>
            
            ))}
    </div>
    )
}