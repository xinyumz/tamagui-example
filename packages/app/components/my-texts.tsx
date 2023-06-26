import { H1, Text } from '@my/ui'

export function MyH1({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <H1
      ff="system-ui"
      col={color ? color : 'black'}
      fow="800"
      ta="center"
      fos="$7"
      my="$4"
      $xs={{ fos: '$4' }}
      $sm={{ fos: '$6' }}
    >
      {children}
    </H1>
  )
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <Text fow="bold" mb="$2" fos="$3" $gtXs={{ fos: '$5' }}>
      {children}
    </Text>
  )
}
