export const dictionaryTypes = {
  // TODO 'Definition': '???',
  'Related Words': 'ml',
  'Rhyming Words': 'rel_rhy',
  'Synonyms': 'rel_syn',
  'Antonyms': 'rel_ant'
};

export const introPoem = {
  title: "The Poem Generator",
  author: "Jared Weide",
  poem: [
    [
      "Welcome to the poem *creator*,",
      "I hope that you enjoy *it*.",
      "It was made by *Jared*,",
      "he's a *programmer*."
    ]
  ]
};

export const exampleRhymeSchemes = [
  {
    name: "Alternating Rhyme",
    scheme: "ABAB CDCD EFEF GHGH",
    example: {
      title: "Neither Out Far Nor In Deep",
      author: "Robert Frost",
      poem: [
        [
          "The people along the sand",
          "All turn and look one way.",
          "They turn their back on the land.",
          "They look at the sea all day."
        ],
        [
          "As long as it takes to pass",
          "A ship keeps raising its hull;",
          "The wetter ground like glass",
          "Reflects a standing gull"
        ],
        [
          "The land may vary more;",
          "But wherever the truth may be—",
          "The water comes ashore,",
          "And the people look at the sea."
        ],
        [
          "They cannot look out far.",
          "They cannot look in deep.",
          "But when was that ever a bar",
          "To any watch they keep?"
        ]
      ]
    }
  },
  {
    name: "Ballade",
    // TODO Add a way to display shortened rhyme schemes? See more?
    scheme: "ABABBCBC ABABBCBC ABABBCBC BCBC",
    example: {
      title: "Ballade of Modest Confession",
      author: "Hilaire Belloc",
      poem: [
        [
          "My reading is extremely deep and wide;",  
          "And as our modern education goes—",
          "Unique I think, and skilfully applied",
          "To Art and Industry and Autres Choses",
          "Through many years of scholarly repose.",
          "But there is one thing where I disappoint",
          "My numerous admirers (and my foes).",
          "Painting on Vellum is my weakest point."
        ],
        [
          "I ride superbly. When I say I 'ride'",
          "The word's too feeble. I am one of those",
          "That dominate a horse. It is my pride",
          "To tame the fiercest with tremendous blows",
          "Of heel and knee. The while my handling shows",
          "Such lightness as a lady's. But Aroint",
          "Thee! Human frailty with thy secret woes!",
          "Painting on Vellum is my weakest point."
        ],
        [
          "Painting on Vellum: not on silk or hide",
          "Or ordinary Canvas: I suppose",
          "No painter of the present day has tried",
          "So many mediums with success, or knows",
          "As well as I do how the subject grows",
          "Beneath the hands of genius, that anoint",
          "With balm. But I have something to disclose—",
          "Painting on Vellum is my weakest point."
        ],
        // TODO This is called an "Envoi". Do you want to add the ability to name stanzas?
        [
          "Prince! do not let your Nose, your royal Nose,",
          "Your large imperial Nose get out of Joint.",
          "For though you cannot touch my golden Prose,",
          "Painting on Vellum is my weakest point."
        ]
      ]
    }
  },
  {
    name: "Coupled Rhyme",
    scheme: "AABB",
    example: {
      title: "Excerpt from Green Eggs and Ham",
      author: "Dr. Seuss",
      poem: [
        [
          "I would not like them here or there.",
          "I would not like them anywhere.",
          "I do not like green eggs and ham.",
          "I do not like them, Sam-I-Am."
        ]
      ]
    }
  },
  {
    name: "Triplet Rhyme",
    scheme: "AAA BBB",
    example: {
      title: "Upon Julia's Clothes",
      author: "Robert Herrick",
      poem: [
        [
          "Whenas in silks my Julia goes,",
          "Then, then (methinks) how sweetly flows",
          "That liquefaction of her clothes."
        ],
        [ 
          "Next, when I cast mine eyes, and see",
          "That brave vibration each way free,",
          "O how that glittering taketh me!"
        ]
      ]
    }
  },
  {
    name: "Monorhyme",
    scheme: "AAAAAA",
    example: {
      title: "Night Storm",
      author: "Marie Summers",
      poem: [
        [
          "It came in a winter’s night,",
          "a fierce cold with quite a bite.",
          "Frosted wind with all its might",
          "sent ice and snow an invite",
          "to layer earth in pure white",
          "and glisten with morning light."
        ]
      ]
    }
  },
  {
    name: "Limerick",
    scheme: "AABBA",
    example: {
      title: "A Young Lady of Lynn",
      poem: [
        [
          "There was a young lady of Lynn,",
          "Who was so uncommonly thin",
          "That when she essayed",
          "To drink lemonade",
          "She slipped through the straw and fell in."
        ]
      ]
    }
  },
  {
    name: "Villanelle",
    scheme: "ABA ABA ABA ABA ABA ABAA",
    example: {
      title: "Do Not Go Gentle Into That Good Night",
      author: "Dylan Thomas",
      poem: [
        [
          // TODO Create a way to add refrains?
          "Do not go gentle into that good night,",
          "Old age should burn and rave at close of day;",
          "Rage, rage against the dying of the light."
        ],
        [
          "Though wise men at their end know dark is right,",
          "Because their words had forked no lightning they",
          "Do not go gentle into that good night."
        ],
        [
          "Good men, the last wave by, crying how bright",
          "Their frail deeds might have danced in a green bay",
          "Rage, rage against the dying of the light."
        ],
        [ 
          "And you, my father, there on the sad height,",
          "Curse, bless, me now with your fierce tears, I pray.",
          "Do not go gentle into that good night.",
          "Rage, rage against the dying of the light."
        ]
      ]
    }
  },
  {
    name: "Enclosed Rhyme",
    scheme: "ABBA",
    example: {
      // TODO Create a way to denote excerpts, first stanzas, etc...
      title: "First Stanza of Shakespeare",
      author: "Matthew Arnold",
      poem: [
        [
          "Others abide our question. Thou art free.",
          "We ask and ask—Thou smilest and art still,",
          "Out-topping knowledge. For the loftiest hill,",
          "Who to the stars uncrowns his majesty, ..."
        ]
      ]
    }
  },
];

export const exampleLines = [
  [
    `This is a sample.`,
    `This is one example.`,
    `These sentences are ample.`
  ],
  [
    `This ain't a pill.`,
    `It's quite a thrill.`,
    `You need this, still.`,
    `Ask my friend, Jill.`
  ],
  [
    `You chose a scheme.`,
    `It's not too extreme.`,
    `I like ice cream.`,
    `Is there a theme?`,
    `Airflow, or air stream?`,
    `Walking on a beam.`,
    `Thinking of a dream.`,
    `Interrupting midstream`
  ],
  [
    `Choose your selection...`,
    `Check the cross section!`,
    `This is perfection!`,
    `Vote this election!`,
    `...go without detection!`,
    `The Clarinet Section.`,
    `Don't miss your connection!`,
    `...my misplaced affection.`,
    `Death by Vivisection.`,
    `...imperfection.`
  ],
  [
    `Walking through the fog`,
    `Reciting my monologue`,
    `I'm the top dog`,
    `Drink some eggnog`,
    `See through the smog`,
    `Sent to the gulag.`,
    `Obedient, little lap dog`
  ],
  [
    `I said, 'Uhmm? ...yes!'`,
    `Too much to process...`,
    `Faux pax to address`,
    `Done through due process`,
    `I need to confess`,
    `I want to progress`,
    `This was a success`,
    `My project to obsess`,
    `See mistakes? Reassess!`
  ],
  [
    `The sky is gray.`,
    `Read my resume.`,
    `I need to say...`,
    `Keep them at bay!`,
    `Let's go and play!`,
    `Write an essay.`,
    `You will soon pay!`,
    `I need to convey:`,
    `See you Friday!`,
    `Gone on holiday`,
    `Caught in the fray`,
    `To my dismay`,
    `My pain, on display!`,
    `My opinion did sway`,
    `You have to stay!`,
    `See you in May!`,
    `I struggle all day`,
    `Today's my birthday.`,
    `No need to betray`,
    `working at the cafe`,
    `Eat the whole buffet!`,
    `Read the Steele Dossier!`
  ]
].sort((a,b) => (b.length - a.length));
