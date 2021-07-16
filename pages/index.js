import React from 'react';
import styled from 'styled-components'
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import ListBox from "../src/components/ListBox";
import BlogList from "../src/components/BlogList";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import ProfileSidebar from "../src/components/ProfileSidebar";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { endpoints, queries } from '../src/data'

export default function Home() {
  const [pessoas, setPessoas] = React.useState([])
  const [comunidades, setComunidades] = React.useState([])
  const [detalhes, setDetalhes] = React.useState({})
  const [posts, setPosts] = React.useState([])
  const dato_read_token = 'dd5be135b70bb32a1c92003a399204'

  React.useEffect( () => {
    fetch(endpoints.pessoas)
    .then( (res) => res.json() )
    .then( (res) => setPessoas(res.data.friends) )
    .catch( (error) => console.log(error) )

    fetch(endpoints.detalhes)
    .then( (res) => res.json() )
    .then( (res) => setDetalhes(res.data.details[0]) )
    .catch( (error) => console.log(error) )

    fetch(endpoints.posts)
    .then( (res) => res.json() )
    .then( (res) => setPosts(res.data) )
    .catch( (error) => console.log(error) )

    fetch(endpoints.comunidades, {
      method: 'POST',
      headers: {
        Authorization: dato_read_token,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: queries.comunidades
      })
    })
    .then( (res) => res.json() )
    .then( (res) => setComunidades(res.data.allCommunities) )
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
                name: dadosForm.get('title'),
                image: dadosForm.get('image'),
                url: dadosForm.get('url')
              }

              fetch('./api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              })
              .then( async (res) => {
                const dadosEnviados = await res.json()
              })

              setComunidades([...comunidades, comunidade])
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
              <div>
                <input
                  type="text"
                  placeholder="URL de destino"
                  name="url"
                  aria-label="URL de destino"
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
