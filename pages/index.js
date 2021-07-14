import React from 'react';
import styled from 'styled-components'
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ListBox from "../src/components/ListBox";
import BlogList from "../src/components/BlogList";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import ProfileSidebar from "../src/components/ProfileSidebar";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { APIs } from '../src/data'

export default function Home() {
  const [pessoas, setPessoas] = React.useState([])
  const [comunidades, setComunidades] = React.useState([])
  const [detalhes, setDetalhes] = React.useState({})
  const [posts, setPosts] = React.useState([])

  React.useEffect( () => {
    fetch(APIs.pessoas)
    .then( (res) => res.json() )
    .then( (res) => setPessoas(res.data.friends) )
    .catch( (error) => console.log(error) )

    fetch(APIs.comunidades)
    .then( (res) => res.json() )
    .then( (res) => setComunidades(res.data.communities) )
    .catch( (error) => console.log(error) )

    fetch(APIs.detalhes)
    .then( (res) => res.json() )
    .then( (res) => setDetalhes(res.data.details[0]) )
    .catch( (error) => console.log(error) )

    fetch(APIs.posts)
    .then( (res) => res.json() )
    .then( (res) => setPosts(res.data) )
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
              recados={detalhes.recados}
              fotos={detalhes.fotos}
              videos={detalhes.videos}
              fas={detalhes.fas}
              mensagens={detalhes.mensagens}
              confiavel={detalhes.confiavel}
              legal={detalhes.legal}
              sexy={detalhes.sexy}
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
              setComunidades([...comunidades, comunidade])
              fetch
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
          <Box>
            <BlogList posts={posts}></BlogList>
          </Box>
        </section>
        <section className='friendsArea' style={{ gridArea: 'friendsArea' }}>
          <ProfileRelationsBoxWrapper>
          <ListBox
            titulo='Pessoas'
            dados={pessoas}
          >
          </ListBox>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <ListBox
              titulo='Comunidades'
              dados={comunidades}
            >
            </ListBox>
          </ProfileRelationsBoxWrapper>
        </section>
      </MainGrid>
    </>
  )
}
