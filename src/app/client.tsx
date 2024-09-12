'use client'

import { Button } from '@nextui-org/react'
import { FC } from 'react'

export const HomeClient: FC<{ client_id: string }> = ({ client_id }) => {
  const getIdentiry = async () => {
    console.log(client_id)
    const { protocol, data } = await navigator.identity.get({
      digital: {
        providers: [
          {
            protocol: 'openid4vp',
            request: {
              client_id,
              client_id_scheme: 'web-origin',
              response_type: 'vp_token',
              nonce: 'n-0S7_WzA2MjTT',
              presentation_definition: {
                id: 'mDL-request-demo',
                input_descriptors: [
                  {
                    id: 'org.iso.18013.5.1.mDL',
                    format: {
                      mso_mdoc: {
                        alg: ['ES256'],
                      },
                    },
                    constraints: {
                      limit_disclosure: 'required',
                      fields: [
                        {
                          path: ["$['org.iso.18013.5.1']['family_name']"],
                          intent_to_retain: false,
                        },
                        {
                          path: ["$['org.iso.18013.5.1']['given_name']"],
                          intent_to_retain: false,
                        },
                        {
                          path: ["$['org.iso.18013.5.1']['age_over_21']"],
                          intent_to_retain: false,
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    })
    console.log(protocol, data)
  }

  return (
    <div className='mx-auto mt-4 w-full max-w-xl'>
      <Button variant='ghost' onPress={getIdentiry}>
        Test
      </Button>
    </div>
  )
}
