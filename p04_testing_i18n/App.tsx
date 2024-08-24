import { View, Text, Button } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {

  const {t, i18n} = useTranslation();

  const changeLanguage = () => {
    const language = i18n.language;
    i18n.changeLanguage(language === 'es' ? 'en' : 'es');
  };
  return (
    <View style={{margin: 20}}>
      <Text style={{fontSize:30}}>
        {t('greet')}.
      </Text>
      <Text style={{marginBottom: 20}}>
        {t('name', {name: 'Luis Arrieta'})}
      </Text>

      <Button onPress={changeLanguage} title={i18n.language === 'en' ? 'Change Language' : 'Cambiar a inglés'} />
    </View>
  );
}
