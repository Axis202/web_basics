// Random facts for each character
function getFacts(person) {
  const facts = {
    'hamid': [
      'Hamid once traveled across the Sahara desert on foot!',
      'Hamid can speak 7 different languages.',
      'Hamid is a skilled coder and a chess grandmaster.'
    ],
    'anders': [
      'Anders the Rizz II is famous for his smooth-talking skills.',
      'He can charm anyone in under 5 minutes.',
      'Anders once convinced an entire room to dance spontaneously!'
    ],
    'daniel': [
      'Daniel the Great built a castle with his own hands.',
      'He once fought a dragon and won.',
      'Daniel can solve any riddle in less than a minute.'
    ],
    'hanna': [
      'Hanna is a world-class pianist.',
      'She once painted an entire mural overnight.',
      'Hanna can run a marathon in under 3 hours.'
    ]
  };

  return facts[person];
}
