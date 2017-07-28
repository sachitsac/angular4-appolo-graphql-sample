
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const query1 = gql`
query($target: String, $granularity: String!, $from: String!, $until: String!) {
  metrics (
    applicationId: "portal-prod"
    metric: "page_view"
    region: "ap-southeast-2"
    from: $from
    granularity: $granularity
    until: $until
    target: $target
  ) {
    TS
    VL
  }
}
`;

export const DATA_QUERY = query1;
