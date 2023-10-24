import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

export function StarRating({ starsValue }: { starsValue: number }) {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= starsValue) {
      // Renderiza estrela completa
      starIcons.push(
        <FontAwesome key={i} name="star" size={12} color="yellow" />
      );
    } else if (i - 0.5 === starsValue) {
      // Renderiza meia estrela
      starIcons.push(
        <FontAwesome key={i} name="star-half" size={12} color="yellow" />
      );
    } else {
      // Renderiza estrela vazia
      starIcons.push(
        <FontAwesome key={i} name="star-o" size={12} color="yellow" />
      );
    }
  }

  return (
    <View className="flex-row gap-1">{starIcons}</View>
  );
}

//   <StarRating starsValue={4.5} />
