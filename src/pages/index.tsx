import { getAccessToken, getSession, useUser } from '@auth0/nextjs-auth0'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return null
}

export default Home


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res); 

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }

}