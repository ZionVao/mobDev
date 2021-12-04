import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Field } from './components/Field';
import { RootView } from './components/view/RootView';

export function Root() {
  const renderItem = () => (
    <Field
      onSelect={(value) => {
        console.log(value);
      }}
    />
  );

  const data = Array.from({ length: 16 }, (_, k) => k.toString());

  return (
    <RootView>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={(key) => key}
      />
    </RootView>
  );
}
