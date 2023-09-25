import React from 'react'
import image from './logo.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  creator: '6Fa47jDybGSpUX9vZ9NNPV7cfjox9iqUFtpifUSGaPpm',
  `,
  image,
  theme_color: 'rgb(29 232 126)',
  app: React.lazy(() => import('./App')),
}
