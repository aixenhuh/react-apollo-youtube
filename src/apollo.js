import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://us-central1-vuewebserver-88b2a.cloudfunctions.net/graphYoutubeServer",
}); 