import { GoogleSpreadsheet } from 'google-spreadsheet'
import { google_api_token } from './tokens.js';

export default async function(req, res) {
  const doc = new GoogleSpreadsheet('1f2U5SEe0WTeBRb1qidyqS8kGP2znmLuzldpIk8SlI10');

  await doc.useServiceAccountAuth({
    client_email: google_api_token.client_email,
    private_key: google_api_token.private_key,
  });

  await doc.loadInfo();
  const planilha = doc.sheetsByIndex[0];
  const linhas = await planilha.getRows()
  const tuplas = linhas.map( ( { name, image, url } ) => {
    return {
      name,
      image,
      url
    }
  } )

  console.log(tuplas)

  res.send({
    tuplas
  })
}
