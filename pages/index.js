import styled from 'styled-components'
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import ProfileSidebar from "../src/components/ProfileSidebar";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";

export default function Home() {
  const githubUser = 'thiagofloriano';
  const pessoasFavoritas = [
    'omariosouto',
    'juunegreiros',
    'peas',
    'rafaballerini',
    'designernatan'
  ]

  const quantidades = {
    recados: Math.round(Math.random()*10),
    fotos: Math.round(Math.random()*170),
    videos: Math.round(Math.random()*25),
    fas: Math.round(Math.random()*1500),
    mensagens: Math.round(Math.random()*700),
    confiavel: 2,
    legal: 3,
    sexy: 1
  }

  return (
    <>
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}></ProfileSidebar>
        </div>
        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet
              recados={quantidades.recados}
              fotos={quantidades.fotos}
              videos={quantidades.videos}
              fas={quantidades.fas}
              mensagens={quantidades.mensagens}
              confiavel={quantidades.confiavel}
              legal={quantidades.legal}
              sexy={quantidades.sexy}
            >
            </OrkutNostalgicIconSet>
          </Box>
        </div>
        <div className='friendsArea' style={{ gridArea: 'friendsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map( (item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img
                        src={`https://github.com/${item}.png`}
                        alt={item}
                      />
                      <span>{item}</span>
                    </a>
                  </li>
                  )
                })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
