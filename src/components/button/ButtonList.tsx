import React from 'react';
import { FlatList } from 'react-native';
import { ButtonItem } from './Button';
import { IButtonItem } from '../../interfaces/IButtonItem';

export function ButtonsList({ buttons }: { buttons: IButtonItem[] }) {
  const renderItem = ({ item }: { item: IButtonItem }) => (
    <ButtonItem text={item.text} handler={item.handler} />
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
