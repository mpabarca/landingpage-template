import { SiGithub, SiInstagram, SiLinkedin, SiMedium, SiSpotify } from '@icons-pack/react-simple-icons'

// Add all Social Media Icons (and links) that you need. Check more here --> https://simpleicons.org/
const SocialMediaLinks = () => {
  return (
    <ul className='flex flex-row gap-2 mt-1'>
      <li><SiGithub size={20} /></li>
      <li><SiInstagram size={20} /></li>
      <li><SiLinkedin size={20} /></li>
      <li><SiMedium size={20} /></li>
      <li><SiSpotify size={20} /></li>
    </ul>
  )
}

export default SocialMediaLinks