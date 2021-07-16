import { SiteClient } from 'datocms-client';
import process from './.env.development.local';


export default async function bff(req, res) {

  const client = new SiteClient(process.env.dato_write_token)

  if (req.method === 'POST') {
    const novoRegistro = await client.items.create({
      itemType: '967046',
      ...req.body
    })

    console.log(novoRegistro);

    res.json(
      novoRegistro
    )

    return
  }

  res.status(404).json({
    message: 'No get, nada, no post tudo'
  })
}
