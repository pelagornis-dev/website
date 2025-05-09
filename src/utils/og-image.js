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
      debug: true,
      props: {
        children: [
          {
            type: "div",
            props: {
              children: header,
              style: {
                fontSize: 30,
                marginLeft: 10,
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: 1,
                backgroundImage:
                  "linear-gradient(to right, rgb(34, 211, 238), rgb(20, 184, 166), rgb(99, 102, 241))",
                backgroundClip: "text",
                "-webkit-background-clip": "text",
                color: "transparent",
              },
            },
          },
          {
            type: "div",
            props: {
              children: [
                {
                  type: "div",
                  props: {
                    children: title,
                    style: {
                      display: "flex",
                      fontSize: 50,
                      fontWeight: 400,
                      textAlign: "left",
                      flex: 1,
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    children: footer,
                    style: {
                      alignSelf: "flex-start",
                      fontSize: 30,
                      letterSpacing: 1,
                      color: "white",
                    },
                  },
                },
              ],
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontStyle: "normal",
                color: "white",
                marginTop: 30,
                lineHeight: 1.8,
                whiteSpace: "pre-wrap",
                flex: 1,
              },
            },
          },
        ],
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(to bottom, rgba(20, 21, 33, 1.0), #110344)",
          fontSize: 60,
          letterSpacing: -2,
          textAlign: "center",
          padding: 80,
        },
      },
    },
    {
      width: width,
      height: height,
    },
  );

  const jpg = await sharp(Buffer.from(svg)).jpeg().toBuffer();
  return jpg;
}

