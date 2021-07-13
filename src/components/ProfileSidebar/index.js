import styled from 'styled-components'
import Box from "../Box";
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons.js'

function ProfileSidebar(props) {
  return (
    <Box as='aside'>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt=''
        style={{borderRadius: '16px'}}
      />
      <hr/>

      <p>
        <a href={`https://github.com/${props.githubUser}`} className="boxLink">
          @{props.githubUser}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>


    </Box>
  )
}

export default ProfileSidebar
