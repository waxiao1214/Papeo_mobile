import React from 'react';
import { FlatList } from 'react-native';
import { termsData } from '../../terms-and-conditions.constant';
import TermListItem from '../../components/term-list-item/term-list-item';

const TermList = () => {
  return (
    <FlatList
      data={termsData}
      renderItem={(termsData) => <TermListItem id={termsData.item.id} text={termsData.item.text} />}
      keyExtractor={(item: any) => item.id}
    />
  );
};

export default TermList;
