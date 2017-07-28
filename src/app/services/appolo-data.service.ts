import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { DATA_QUERY } from '../common/queries';

// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://cortex.equiem.com.au/v1/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@Injectable()
export class AppoloDataService {

  constructor( private appoloClient: Apollo ) { }
  getData() {
    return this.appoloClient.watchQuery({
      query: DATA_QUERY,
      variables: {
        'target': 'https://atrialto.com/',
        'granularity': 'Minutely',
        'from': '2017-07-04T03:00',
        'until': '2017-07-04T09:00'
      }
    });
  }
}
