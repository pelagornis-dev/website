import fs from 'fs/promises';
import satori from 'satori';
import sharp from 'sharp';

export default async function ogImage(
  { header, title, footer, lang } = {
    header: "Pelagornis",
    title: "Title",
    footer: "Footer",
    lang: "en"
  },
  { width, height } = { width: 1200, height: 600 }
) {
  const svg = await satori(
    {
      type: "div",
      props: {
        children: [],
        style: {},
      }
    }
  );

  const jpg = await sharp(Buffer.from(svg)).jpeg().toBuffer();
  return jpg;
}

