import { SiteClient } from 'datocms-client';
import { dato_write_token } from './tokens.js';

export default async function bff(req, res) {

  const client = new SiteClient(dato_write_token)

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
