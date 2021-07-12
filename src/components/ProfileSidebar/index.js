import styled from 'styled-components'
import Box from "../Box";

function ProfileSidebar(props) {
  console.log(props);
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt=''
        style={{padding: '16px', borderRadius: '30px'}}
      />
      Perfil
    </Box>
  )
}

export default ProfileSidebar
