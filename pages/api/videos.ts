import { NextApiRequest, NextApiResponse } from 'next';

type Video = {
  id: string;
  title: string;
};

const videos: Video[] = [
  {
    id: 'X9Fzjwywv8Y',
    title: 'kei - like ooo (Official Music Video)',
  },
  {
    id: 'LlGSc4feT9Y',
    title: 'Tomo - Facade (Official Music Video)',
  },
  {
    id: 'taYLIoCXbiY',
    title: 'Big Sosa - Sosa Black (Official Music Video)',
  },
  {
    id: 'CpcR629JMD0',
    title: "Emanle Ali - Why We Don’t Fall In Love (Official Music Video)",
  },
  {
    id: 'cCiAyqfZABg',
    title: 'Dom Dior - 30 Degrees (Official Music Video)',
  },
  {
    id: '2JhmBmEVAoo',
    title: 'Asian Doll @ Centro Night Club | Recap 01.05.22',
  },
  {
    id: 'B3O4RVn8UMg',
    title: "The Chocolate Project's 'Celebration of Black Art' | Event Recap 5.13.23",
  },
  {
    id: 'Ty0n5C9dECk',
    title: 'Vision tha Dreamer - OG (Official Music Video)',
  },
  // Add more videos as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(videos);
  } else {
    res.status(405).end();
  }
}
