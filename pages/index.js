import React from 'react';
import styled from 'styled-components'
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ListBox from "../src/components/ListBox";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import ProfileSidebar from "../src/components/ProfileSidebar";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { comunidades, pessoasFavoritas, quantidades } from '../src/data'



export default function Home() {
  const [pessoas, setPessoas] = React.useState([])

  React.useEffect( () => {
    fetch('https://api.github.com/users/thiagofloriano/following')
    .then( (res) => res.json() )
    .then( (data) => setPessoas(data) )
    .catch( (error) => console.log(error) )
  }, [] )

  const [stateComunities, setComunities] = React.useState(comunidades)
  const githubUser = 'thiagofloriano';

  return (
    <>
      <AlurakutMenu githubUser={githubUser}></AlurakutMenu>
      <MainGrid>
        <section className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}></ProfileSidebar>
        </section>
        <section className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
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
          <Box>
            <h2 className="subtitle">
              O que você deseja fazer?
            </h2>
            <form onSubmit={ (event) => {
              event.preventDefault()
              const dadosForm = new FormData(event.target)
              const comunidade = {
                id: new Date().toISOString(),
                name: dadosForm.get('title'),
                image: dadosForm.get('image')
              }
              setComunities([...stateComunities, comunidade])
            }}>
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da comunidade?"
                  name="title"
                  aria-label="Nome da comunidade"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="URL da capa"
                  name="image"
                  aria-label="Imagem da capa"
                />
              </div>
              <button type='submit'>
                Criar comunidade
              </button>
            </form>
          </Box>
        </section>
        <section className='friendsArea' style={{ gridArea: 'friendsArea' }}>
          <ProfileRelationsBoxWrapper>
          <ListBox
            titulo='Amigos'
            dados={pessoasFavoritas}
          >
          </ListBox>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <ListBox
              titulo='Comunidades'
              dados={stateComunities}
            >
            </ListBox>
          </ProfileRelationsBoxWrapper>
        </section>
      </MainGrid>
    </>
  )
}
