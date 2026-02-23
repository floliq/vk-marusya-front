export const getGenrePicture = (genre: string) => {
  const images: Record<string, string> = {
    history:
      'https://cinemaguide.skillbox.cc/images/79/jDz6RYN3nKYtlo7J9IMvGoJit7B.jpg',
    horror:
      'https://cinemaguide.skillbox.cc/images/17/dhr0q4eiRr8ltqPig32TwhPRdaD.jpg',
    scifi:
      'https://cinemaguide.skillbox.cc/images/11/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg',
    'stand-up':
      'https://cinemaguide.skillbox.cc/images/14541/h1n1Q8dOzCPf0C3x3HKZ8wJEYKg.jpg',
    fantasy:
      'https://cinemaguide.skillbox.cc/images/18/gEFe2joIQUopBmMPXOHPxuX2f4u.jpg',
    drama:
      'https://cinemaguide.skillbox.cc/images/2/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg',
    mystery:
      'https://cinemaguide.skillbox.cc/images/15/ruF3Lmd4A8MHbnEBE6lxPMbsHGL.jpg',
    family:
      'https://cinemaguide.skillbox.cc/images/118/bSvUW4JQ6g4QiKvwejcfcPRd4Ke.jpg',
    comedy:
      'https://cinemaguide.skillbox.cc/images/3/l94l89eMmFKh7na2a1u5q67VgNx.jpg',
    romance:
      'https://cinemaguide.skillbox.cc/images/20/kZyurQjTMLHalUxs7sHgH5XeiwO.jpg',
    music:
      'https://cinemaguide.skillbox.cc/images/27/qU7tNIMpRqkizIObXfkJY3haTqh.jpg',
    crime:
      'https://cinemaguide.skillbox.cc/images/6/bGMqHn0H2UY6SPZ5Vch4YJM2jDO.jpg',
    'tv-movie':
      'https://cinemaguide.skillbox.cc/images/839/AoGLKkPvBcZP27jwSA85fY8emvJ.jpg',
    documentary:
      'https://cinemaguide.skillbox.cc/images/21/uNRfK14Ga8Hwfqt07vo8nvWQN1i.jpg',
    action:
      'https://cinemaguide.skillbox.cc/images/6/bGMqHn0H2UY6SPZ5Vch4YJM2jDO.jpg',
    thriller:
      'https://cinemaguide.skillbox.cc/images/59/5EEdDTV0IBxJ2J4jDUDvl076v7f.jpg',
    western:
      'https://cinemaguide.skillbox.cc/images/301/cPDKIvdYJ4TLT3KU0fpGDVpdhfd.jpg',
    animation:
      'https://cinemaguide.skillbox.cc/images/12/eCynaAOgYYiw5yN5lBwz3IxqvaW.jpg',
    war: 'https://cinemaguide.skillbox.cc/images/25/bQ8fRUaitJvi54O2lUT6Ta7FVHK.jpg',
    adventure:
      'https://cinemaguide.skillbox.cc/images/22/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg',
  };

  return images[genre] ?? null;
};
