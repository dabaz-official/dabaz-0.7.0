export const seo = {
  title: 'DabAZ',
  description: 'I am an ethical hacker, entrepreneur, music producer, designer, and front-end developer.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://dabaz.me'
      : 'http://localhost:3000'
  ),
  imageSrc: 'https://dabaz.me/images/opengraph-image.jpg',
  imageAlt: "Logo of 'DabAZ' featuring a stylized white semi-circular arrow pointing up and to the right, set against a dark navy blue background. The word 'DabAZ' is displayed to the right of the icon in large white capital letters, with a modern sans-serif typeface.",
  siteName: 'DabAZ',
} as const;