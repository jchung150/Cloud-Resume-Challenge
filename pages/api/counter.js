// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let counter = 0

export default function handler(req, res) {
  counter++;
  res.status(200).json({ count: counter })
}
