import fetch from 'node-fetch'

export default async function postToMailerlite (req, res) {
  const url = 'https://api.mailerlite.com/api/v2/subscribers'

  const headers = {
    Accept: 'application/json',
    'X-MailerLite-ApiDocs': 'true',
    'Content-Type': 'application/json',
    'X-MailerLite-ApiKey': process.env.MAILERLITE_API_TOKEN
  }

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(req.body)
    }).then(res => {
      return res.json()
    })
    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
