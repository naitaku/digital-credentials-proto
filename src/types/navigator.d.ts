interface PresentationDefinition {
  id: string
  input_descriptors: unknown
}

type Protocol = 'openid4vp'

interface IdentiryContainer {
  get(options: {
    digital: {
      providers: {
        protocol: Protocol
        request: {
          client_id: string
          client_id_scheme: 'web-origin'
          response_type: 'vp_token'
          nonce: string
          presentation_definition: PresentationDefinition
        }
      }[]
    }
  }): Promise<{
    id: string
    type: string
    protocol: Protocol
    data: string
  }>
}

interface Navigator {
  identity: IdentiryContainer
}
