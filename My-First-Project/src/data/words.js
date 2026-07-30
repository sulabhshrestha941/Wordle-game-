export const WORDS = [
  'apple',
  'brave',
  'crane',
  'drink',
  'eagle',
  'flame',
  'grape',
  'house',
  'input',
  'joker',
  'knife',
  'lemon',
  'mango',
  'night',
  'ocean',
  'pilot',
  'queen',
  'river',
  'stone',
  'tiger',
  'unity',
  'vivid',
  'water',
  'xenon',
  'yacht',
  'zebra',
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}