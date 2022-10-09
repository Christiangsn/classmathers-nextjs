import {  ApolloClient, createHttpLink, InMemoryCache, from, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import { GetServerSidePropsContext, NextPage } from "next";

export type ApolloClientContext = GetServerSidePropsContext

// High order Funcition - funcao que recebe uma funcao
export const withApollo = (Component: NextPage) => {
    return function Provider(props: any) {
        return (
            <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
                <Component {...props} />
            </ApolloProvider>
        )
    }
}

export function getApolloClient (ctx?: ApolloClientContext, initialState?: NormalizedCacheObject) {
    // Erro no process.env
    const httpLink = createHttpLink({
        uri: 'http://localhost:3000/api',
        fetch
    })

    const cache = new InMemoryCache().restore(initialState ?? {})

    return new ApolloClient({
        link: from([httpLink]),
        cache
    })
}