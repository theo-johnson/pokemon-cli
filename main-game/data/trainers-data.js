const NPCs = {
  'Shorts Kid': {
    name: 'Shorts Kid',
    messages: [`I like shorts! They're comfy and easy to wear!`],
    defeatMessages: [
      'I lost? Even with shorts on?',
      `I don't deserve to wear these... here.`,
      'Oh well, at least I was comfy!',
    ],
    pokemon: [],
    typePreferences: ['bug', 'normal'],
    typeExclusive: false,
    rewards: ['Shorts'],
  },
  'Bug Catcher': {
    name: 'Bug Catcher',
    messages: [
      `Aren't bugs cool?`,
      'Let me show you my new bug Pokemon!',
      `Some people think they're creepy, but I love bugs.`,
      'Caught any cool bugs lately?',
      `What? Quit bugging me!`,
      'Did you know that Weedles have an extremely acute sense of smell?',
      'Weedles eat their weight in leaves every day. Pretty cool, huh?',
    ],
    defeatMessages: [
      'Should I try using another type of Pokemon...?',
      'Hm... my bugs still have room to grow.',
      `Go... huh? That's all of them? I need to go catch some more.`,
      'No fair! Bug Pokemon need time before they show their strength.',
    ],
    pokemon: [],
    typePreferences: ['bug'],
    typeExclusive: true,
    rewards: ['Antidote'],
  },
  Ash: {
    name: 'Ash',
    messages: [
      `Pikachu, I choose you!`,
      `Gotta catch 'em all!`,
      `I wanna be the very best.`,
      `I'm training to be a Pokemon master.`,
    ],
    defeatMessages: [
      `I'll never give up!`,
      'Huh? I lost?',
      `No way, I'm the main character, I can't lose!`,
      'Like no one... ever was?',
      `I'm no Pokemon master...`,
      `Even when you lose, you have to believe!`,
    ],
    pokemon: ['Pikachu'],
    typePreferences: [],
    typeExclusive: false,
    rewards: ['Master Ball'],
  },
  'Squirtle Squad': {
    name: 'Squirtle Squad',
    messages: [
      `Squirtle!`,
      `Squirtle squirt!`,
      `Squi-squirtle!`,
      `Squiiirtle!`,
    ],
    defeatMessages: [
      `Squirt...`,
      'Squirtle squirt...',
      `Squirtle?`,
      'Squirtle...',
    ],
    pokemon: [
      'Squirtle',
      'Squirtle',
      'Squirtle',
      'Squirtle',
      'Squirtle',
      'Squirtle',
    ],
    typePreferences: ['water'],
    typeExclusive: true,
    rewards: ['Sunglasses'],
  },
};

const names = [
  'Winston',
  'Helen',
  'Myah',
  'Deandre',
  'Kristina',
  'Micheal',
  'Izabelle',
  'Ryan',
  'Kathryn',
  'Coby',
  'Omari',
  'Jorden',
  'Vicente',
  'Isai',
  'Rolando',
  'Heath',
  'Brody',
  'Alayna',
  'Giselle',
  'Chana',
  'Lana',
  'Maritza',
  'Felix',
  'Jameson',
  'Leyla',
  'Todd',
  'Esteban',
  'Chelsea',
  'Rylee',
  'Shamar',
  'Corey',
  'Hunter',
  'Ezra',
  'Seth',
  'Quintin',
  'Alena',
  'Allen',
  'Yoselin',
  'Mason',
  'Teresa',
  'Miriam',
  'Wade',
  'Danna',
  'Lane',
  'Zara',
  'Julianne',
  'Olive',
  'Jamiya',
  'Ainsley',
  'Fabian',
];

const messages = [
  `Let's battle!`,
  `My Pokemon have been training hard, this won't be easy!`,
  `Just give up already.`,
  `I've never lost a battle and I'm not starting now!`,
  `I'd never lose to a wimp like you!`,
  `Your Pokemon don't look so tough.`,
  `Are you that kid who's been travelling the world? 
  I bet you've found some cool Pokemon. Can I see?`,
  `What's your favourite Pokemon? This is mine!`,
  `I love Pokemon. They fight to the very end and don't ask questions.`,
  'If Pokemon are intelligent, why do we make them fight?',
  'Do you think my Pokemon love me?',
  'I train with my Pokemon every day!',
  'Where did you catch your Pokemon? I can never find a good spot...',
  'Hi! Want to battle?',
  'Oh! Our eyes met. Now we have to battle!',
  'What are you looking at?',
  'Are you staring at me?',
  `Hey kid! Give me your Pokemon!`,
  'Do you have a spare potion?',
  `Hi there. What's your name?`,
  'Do you want to be friends?',
];

const defeatMessages = [
  `I lost?`,
  `Phew, you're tougher than you look!`,
  'No way!',
  'No fair...',
  'What? I was sure I was going to win...',
  `Close one!`,
  `That was fun!`,
  `My Pokemon weren't strong enough...`,
  `How did you...?`,
  'Impossible!',
  `Oh well, I'm late for dinner anyway.`,
  `You won't beat me so easily next time!`,
  'Whoops... I forgot I had this potion...',
  'My Pokemon! I need to find a Pokemon Centre...',
  `Hey, you're pretty good!`,
];

module.exports = { NPCs, names, messages, defeatMessages };
