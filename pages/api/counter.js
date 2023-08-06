let counter = 0

export default function handler(req, res) {
  counter++;
  res.status(200).json({ count: counter })
}
