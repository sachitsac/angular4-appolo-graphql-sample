import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

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

  constructor() { }

}
