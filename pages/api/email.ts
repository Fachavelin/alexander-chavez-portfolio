import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  ok: boolean;
  msg: string;
};

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      await sendMail(req, res);
      break;

    default:
      res.status(400).json({ ok: false, msg: 'Method does not exist' });
  }
}

const sendMail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, mail, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    /* host: 'smtp.outlook.com',
    port: 587,
    secure: false, */
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const options = {
    from: process.env.EMAIL_SENDER,
    to: 'freddyalexander2.chavez@gmail.com',
    subject: `Mensaje de: ${name} - ${mail}`,
    text: `${message}`,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      res.status(400).json({ ok: false, msg: 'Method does not exist' });
    } else {
      res.status(200).json({ ok: true, msg: 'Correo envíado con éxito' });
    }
  });
};
