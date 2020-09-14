import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUri:
        'https://pbs.twimg.com/profile_images/1284955198130130949/CgLZ3-RA_400x400.jpg',
      name: 'Samsbulo Senda',
    },
    imageUri: 'https://static.toiimg.com/photo/72533407/victoria-falls.jpg',
    caption: 'His is victoria falls in zimbabwe',
    likesCount: 555,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://pbs.twimg.com/profile_images/1284955198130130949/CgLZ3-RA_400x400.jpg',
      name: 'Lukas',
    },
    imageUri: 'https://static.toiimg.com/photo/72533407/victoria-falls.jpg',
    caption: 'His is victoria falls in zimbabwe',
    likesCount: 555,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => (
  <FlatList data={data} renderItem={({item}) => <Post post={item} />} ListHeaderComponent={Stories}/>
);
export default Feed;
