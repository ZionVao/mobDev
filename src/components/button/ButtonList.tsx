import React from 'react';
import { FlatList } from 'react-native';
import { ButtonItem } from './Button';
import { IButtonItem } from '../../interfaces/IButtonItem';

export function ButtonsFlatList({ buttons }: { buttons: IButtonItem[] }) {
  const renderItem = ({ item }: { item: IButtonItem }) => (
    <ButtonItem label={item.text} />
  );

  return (
    <FlatList
      data={buttons}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      numColumns={4}
    />
  );
}
