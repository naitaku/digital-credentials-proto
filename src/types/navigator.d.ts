interface PresentationDefinition {
  id: string
  input_descriptors: unknown
}

interface IdentiryContainer {
  get(options: {
    digital: {
      providers: {
        protocol: 'openid4vp'
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
    protocol: unknown
    data: unknown
  }>
}

interface Navigator {
  identity: IdentiryContainer
}
