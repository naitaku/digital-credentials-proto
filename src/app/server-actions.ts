'use server'

import { parseJson } from '@/utils/json'
import { decode } from 'cbor-x'
import { nanoid } from 'nanoid'

// 本来はDBなどに保持するが、お試しの暫定として
let nonce = ''

export const getRequestParams = async () => {
  console.debug('getRequestParams:start:')

  const clientId = process.env.DC_CLIENT_ID
  if (!clientId) {
    throw new Error('DC_CLIENT_ID is not set')
  }

  nonce = nanoid(32)

  const res = {
    clientId,
    nonce,
  }

  console.debug('getRequestParams:end:', res)
  return res
}

export const setResponseData = async (data: string) => {
  console.debug('setResponseData:start:', data)

  // 受け取ったdataをJSONとしてパース
  const dataObj = parseJson<{ vp_token: string }>(data)
  console.debug('dataObj:', dataObj)

  // vp_tokenをbase64urlデコード、かつCBORデコード
  const vpToken = decode(Buffer.from(dataObj.vp_token, 'base64url'))
  console.debug('vpToken:', vpToken)

  const doc = vpToken.documents[0]
  console.debug('doc:', doc)

  const items = doc.issuerSigned.nameSpaces['org.iso.18013.5.1']
  console.debug('items:', items)

  for (const item of items) {
    console.debug('value:', decode(item.value))
  }

  console.debug('setResponseData:end:')
}
