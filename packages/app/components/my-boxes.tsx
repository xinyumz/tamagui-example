import { Square, Text } from 'tamagui'

export function MyBoxL({ backgroundColor }: { backgroundColor: string }) {
  return (
    <Square
      size={128}
      $gtXs={{
        size: 160,
      }}
      $gtSm={{
        size: 208,
      }}
      bc={backgroundColor}
      bs="solid"
      br="$3"
      boc="black"
      bw={1}
      jc="center"
    >
      <Text
        ta="center"
        fow="bold"
        col="white"
        fos="$1"
        $gtXs={{
          fos: '$2',
        }}
        $gtSm={{
          fos: '$3',
        }}
      >
        {backgroundColor}
      </Text>
    </Square>
  )
}

export function MyBoxS({ backgroundColor }: { backgroundColor: string }) {
  return (
    <Square
      size={80}
      $gtXs={{
        size: 128,
      }}
      $gtSm={{
        size: 160,
      }}
      bc={backgroundColor}
      jc="center"
    >
      <Text
        ta="center"
        fow="bold"
        col="white"
        fos="$0"
        $gtXs={{
          fos: '$1',
        }}
        $gtSm={{
          fos: '$2',
        }}
      >
        {backgroundColor}
      </Text>
    </Square>
  )
}
