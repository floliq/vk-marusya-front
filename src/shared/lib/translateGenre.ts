export const translateGenre = (genre: string): string => {
  const translations: Record<string, string> = {
    history: 'История',
    horror: 'Ужасы',
    scifi: 'Научная фантастика',
    'stand-up': 'Стендап',
    fantasy: 'Фэнтези',
    drama: 'Драма',
    mystery: 'Детектив',
    family: 'Семейный',
    comedy: 'Комедия',
    romance: 'Мелодрама',
    music: 'Музыка',
    crime: 'Криминал',
    'tv-movie': 'ТВ фильм',
    documentary: 'Документальный',
    action: 'Боевик',
    thriller: 'Триллер',
    western: 'Вестерн',
    animation: 'Мультфильм',
    war: 'Военный',
    adventure: 'Приключения',
  };

  return translations[genre] ?? genre;
};
