import { SAVE_CATEGORIES } from './types';
import { colors } from '../../theme/styles';

export function fetchCategories() {
  const payload = [
    { title: 'Facebook', color: colors.categorieFacebook },
    { title: 'Google+', color: colors.categorieGooglePlus },
    { title: 'Instagram', color: colors.categorieInstagram },
    { title: 'LinkedIn', color: colors.categorieLinkedin },
    { title: 'Pinterest', color: colors.categoriePinterest },
    { title: 'Twitter', color: colors.categorieTwitter }
  ];
  return saveCategories(payload);
}

export function saveCategories(payload) {
  return {
    type: SAVE_CATEGORIES,
    payload
  };
}

