import React from 'react';
import process from '../../pages/api/.env.development.local';

export const endpoints = {
  pessoas: `https://api.buttercms.com/v2/content/friends/?auth_token=${process.env.butter_token}`,
  comunidades: 'https://graphql.datocms.com',
  detalhes: `https://api.buttercms.com/v2/content/details/?auth_token=${process.env.butter_token}`,
  posts: `https://api.buttercms.com/v2/posts/?auth_token=${process.env.butter_token}`
}

export const queries = {
  comunidades: '{ allCommunities { id name image url } }'
}
