import { Paragraph, XStack, YStack, Text, SizableText } from '@my/ui'
import { Subtitle } from './my-texts'

export function MyP({
  children,
  fontFamily,
}: {
  children: React.ReactNode[]
  fontFamily?: string
}) {
  return (
    <Paragraph
      ta="justify"
      ff={fontFamily}
      my="$4"
      fos="$5"
      $xs={{ fos: '$2' }}
      $sm={{ fos: '$4' }}
      fow="normal"
    >
      <SizableText fow="bold">{children[0]}</SizableText>
      {children[1]}
    </Paragraph>
  )
}

export function FormattedBlock({
  children,
  maxWidth,
  gap,
  justifyContent,
  flexWrap,
}: {
  children: React.ReactNode[]
  maxWidth?: string | number
  gap?: string | number
  justifyContent?: any
  flexWrap?: any
}) {
  return (
    <YStack gap="$2" maw={maxWidth}>
      <Subtitle>{children[0]}</Subtitle>
      <XStack gap={gap} fw={flexWrap} jc={justifyContent}>
        {children[1]}
      </XStack>
    </YStack>
  )
}
