import gql from 'graphql-tag'

export const GET_EVENTS_QUERY = gql`
  query getEvents {
    events{
      id
      name
      profit
    }
  }
`