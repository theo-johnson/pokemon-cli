const itemsData = {
  Money: {
    name: 'Money',
    types: ['money'],
    price: 1,
    rarity: 1,
    description: 'Money can be exchanged for goods and services.',
    useInBattle: false,
    useInMenu: false,
  },
  'Poke Ball': {
    name: 'Poke Ball',
    types: ['ball'],
    price: 200,
    rarity: 1,
    description:
      'A basic Poke Ball. Has an average chance of catching Pokemon.',
    useInBattle: true,
    useInMenu: false,
  },
  'Great Ball': {
    name: 'Great Ball',
    types: ['ball'],
    price: 600,
    rarity: 3,
    description:
      'A high-quality Poke Ball. Has an above average chance of catching Pokemon.',
    useInBattle: true,
    useInMenu: false,
  },
  'Ultra Ball': {
    name: 'Ultra Ball',
    types: ['ball'],
    price: 1200,
    rarity: 5,
    description:
      'The best Poke Ball money can buy. Has a high chance of catching Pokemon.',
    useInBattle: true,
    useInMenu: false,
  },
  'Master Ball': {
    name: 'Master Ball',
    types: ['ball'],
    price: null,
    rarity: 10,
    description:
      'A legendary Poke Ball capable of capturing any Pokemon, even when the Pokemon has not been weakened.',
    useInBattle: true,
    useInMenu: false,
  },
  Potion: {
    name: 'Potion',
    types: ['heal'],
    price: 300,
    rarity: 1,
    description: 'A basic potion. Restores up to 10 HP',
    useInBattle: true,
    useInMenu: true,
    effect: {
      stat: 'hitPoints',
      modifier: 10,
      staysAfterBattle: true,
    },
  },
  'Super Potion': {
    name: 'Super Potion',
    types: ['heal'],
    price: 700,
    rarity: 3,
    description: 'A more potent potion. Restores up to 25 HP',
    useInBattle: true,
    useInMenu: true,
    effect: {
      stat: 'hitPoints',
      modifier: 25,
      staysAfterBattle: true,
    },
  },
  'Hyper Potion': {
    name: 'Hyper Potion',
    types: ['heal'],
    price: 1200,
    rarity: 5,
    description: 'A cutting-edge new potion. Restores up to 50 HP',
    useInBattle: true,
    useInMenu: true,
    effect: {
      stat: 'hitPoints',
      modifier: 50,
      staysAfterBattle: true,
    },
  },
  'Max Potion': {
    name: 'Max Potion',
    types: ['heal'],
    price: 2500,
    rarity: 10,
    description:
      'A potion capable of healing all wounds. Restores a Pokemon to full HP.',
    useInBattle: true,
    useInMenu: true,
    effect: {
      stat: 'hitPoints',
      modifier: 9999,
      staysAfterBattle: true,
    },
  },
  'Full Restore': {
    name: 'Full Restore',
    types: ['heal', 'remove'],
    price: 3000,
    rarity: 15,
    description:
      'The ultimate restorative item. Restores a Pokemon to full HP and cures it of all conditions.',
    useInBattle: true,
    useInMenu: true,
    effect: {
      stat: 'hitPoints',
      modifier: 9999,
      staysAfterBattle: true,
      remove: 'all',
    },
  },
  Antidote: {
    name: 'Antidote',
    types: ['remove'],
    price: 100,
    rarity: 0,
    description: 'Cures poisoned Pokemon.',
    useInBattle: true,
    useInMenu: true,
    effect: {
      remove: 'poisoned',
    },
  },
  Protein: {
    name: 'Protein',
    types: ['boost'],
    price: 9800,
    rarity: 5,
    description: `Vitamins: These are good for your strength. Permanently boost a Pokemon's attack by 2.`,
    useInBattle: false,
    useInMenu: true,
    effect: {
      stat: 'attack',
      modifier: 10,
      staysAfterBattle: true,
      permanent: true,
    },
  },
  Shorts: {
    name: 'Shorts',
    types: ['misc'],
    price: 200,
    rarity: 100,
    description: `Apparently they're comfy and easy to wear.`,
    useInBattle: false,
    useInMenu: true,
    effect: {
      message: `You put the shorts on\n...\nHey, they are pretty comfy!`,
    },
  },
  Sunglasses: {
    name: 'Sunglasses',
    types: ['misc'],
    price: 500,
    rarity: 100,
    description: `They're Squirtle-sized. Will they fit?`,
    useInBattle: false,
    useInMenu: true,
    effect: {
      message: `You've never looked cooler.`,
    },
  },
};

module.exports = { itemsData };
