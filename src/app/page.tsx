import { FC } from 'react'
import { HomeClient } from './client'

const Home: FC = async () => {
  const clientId = process.env.DC_CLIENT_ID
  if (!clientId) {
    throw new Error('DC_CLIENT_ID is not set')
  }

  return <HomeClient client_id={clientId} />
}
export default Home
