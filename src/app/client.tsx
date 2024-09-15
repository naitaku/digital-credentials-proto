'use client'

import { Button } from '@nextui-org/react'
import { FC } from 'react'
import { getRequestParams, setResponseData } from './server-actions'

export const HomeClient: FC = () => {
  const getIdentity = async () => {
    // サーバーサイドからリクエストの為のパラメータを取得
    const req = await getRequestParams()
    console.debug(req)

    // VPの取得要求
    const { data } = await navigator.identity.get({
      digital: {
        providers: [
          {
            protocol: 'openid4vp',
            request: {
              client_id: req.clientId,
              client_id_scheme: 'web-origin',
              response_type: 'vp_token',
              nonce: req.nonce,
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
    console.debug(data)

    // 取得したData(vp_token)をサーバーサイドに送信
    await setResponseData(data)
  }

  return (
    <div className='mx-auto mt-4 w-full max-w-xl'>
      <Button variant='ghost' onPress={getIdentity}>
        identity.get
      </Button>
    </div>
  )
}
