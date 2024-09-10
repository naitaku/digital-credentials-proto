'use client'

import { Button } from '@nextui-org/react'
import { FC } from 'react'

export const HomeClient: FC = () => {
  return (
    <div className='mx-auto mt-4 w-full max-w-xl'>
      <Button
        variant='ghost'
        onPress={() => {
          alert('test')
        }}
      >
        Test
      </Button>
    </div>
  )
}
