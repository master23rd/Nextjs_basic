// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

export default function hello(req, res) {
  res.send({message : "hello world"})
}
