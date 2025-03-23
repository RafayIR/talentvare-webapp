import localFont from 'next/font/local'


export const NeueHasMedium = localFont({
  src: [
    {
      path: './fonts/neuehaas-medium.ttf',
      style: 'normal',
      weight: '500'
    },
    {
      path: './fonts/neuehaas-roman.ttf',
      style: 'normal',
      weight: '400'
    },
    {
      path: './fonts/neuehaas-light.ttf',
      style: 'normal',
      weight: '300'
    },
    {
      path: './fonts/neuehaas-bold.ttf',
      style: 'normal',
      weight: '600'
    },
    {
      path: './fonts/neuehaas-black.ttf',
      style: 'normal',
      weight: '700'
    }
  ],
  variable: "--neue-medium"
})
