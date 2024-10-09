// Random facts for each character
function getFacts(person) {
  const facts = {
    hamid: [
      "Hamid once traveled across the Sahara desert on foot!",
      "Hamid can speak 7 different languages.",
      "Hamid is a skilled coder and a chess grandmaster.",
    ],
    'anders': [
  'Anders once convinced an entire crowd to start a dance-off!',
  'He has a secret hobby of collecting rare books.',
  'Anders is rumored to have the ability to talk his way out of any situation.'
]
    ,
    daniel: [
      "Daniel the Great built a castle with his own hands.",
      "He once fought a dragon and won.",
      "Daniel can solve any riddle in less than a minute.",
    ],
    hanna: [
      "Hanna is a world-class pianist.",
      "She once painted an entire mural overnight.",
      "Hanna can run a marathon in under 3 hours.",
    ],
  };

  return facts[person];
}
