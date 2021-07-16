import React from 'react';
import { butter_token } from '../../pages/api/tokens';

export const endpoints = {
  pessoas: `https://api.buttercms.com/v2/content/friends/?auth_token=${butter_token}`,
  comunidades: 'https://graphql.datocms.com',
  detalhes: `https://api.buttercms.com/v2/content/details/?auth_token=${butter_token}`,
  posts: `https://api.buttercms.com/v2/posts/?auth_token=${butter_token}`
}

export const queries = {
  comunidades: '{ allCommunities { id name image url } }'
}
