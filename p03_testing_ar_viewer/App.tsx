import * as React from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import {ArViewerView} from 'react-native-ar-viewer';

const models = [
  {
    id: '1',
    name: 'Fruit Tart (1k)(glb)',
    file: 'fruit_tart_1k.glb',
  },
  {
    id: '2',
    name: 'Fruit Tart (4k)(glb)',
    file: 'fruit_tart_4k.glb',
  },
  {
    id: '3',
    name: 'Fruit Tart (8k)(glb)',
    file: 'fruit_tart_8k.glb',
  },
  {
    id: '4',
    name: 'Galletas (1k)(glb)',
    file: 'sprinkle_cookies_1k.glb',
  },
  {
    id: '5',
    name: 'Galletas (4k)(glb)',
    file: 'sprinkle_cookies_4k.glb',
  },
  {
    id: '6',
    name: 'Galletas (8k)(glb)',
    file: 'sprinkle_cookies_8k.glb',
  },
];

export default function App() {
  const [selectedModel, setSelectedModel] = React.useState<string | null>(null);

  const renderItem = ({item}: {item: (typeof models)[0]}) => (
    <Button
      title={item.name}
      onPress={() =>
        setSelectedModel(`file:///android_asset/custom/${item.file}`)
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={models}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      {selectedModel && (
        <ArViewerView
          model={selectedModel}
          style={styles.arView}
          disableInstantPlacement
          manageDepth
          allowRotate
          allowScale
          allowTranslate
          onStarted={() => console.log('Iniciado')}
          onEnded={() => console.log('Finalizado')}
          onModelPlaced={() => console.log('Modelo mostrado')}
          onModelRemoved={() => console.log('Modelo ya no es visible')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  list: {
    flex: 1,
  },
  arView: {
    flex: 2,
  },
});
