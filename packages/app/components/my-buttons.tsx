import { useState } from 'react'
import { YStack, Button, Text, AlertDialog } from '@my/ui'
import { Subtitle } from './my-texts'

export function Buttons() {
  return (
    <YStack gap="$4" ai="center">
      <Subtitle>Interactive buttons: </Subtitle>
      <CountButton />
      <ModalButton />
    </YStack>
  )
}

function CountButton() {
  const [count, setCount] = useState(0)
  return (
    <YStack gap="$1" ai="center">
      <Button onPress={() => setCount(count + 1)}>CLICK ME</Button>
      <Text fos="$3">
        You've clicked{' '}
        <Text col="$primary" fow="bold">
          {count}
        </Text>{' '}
        times!
      </Text>
    </YStack>
  )
}

function ModalButton() {
  //const [modalVisible, setModalVisible] = useState(false)

  return (
    <YStack gap="$1" ai="center">
      <AlertDialog native>
        <AlertDialog.Trigger asChild>
          <Button>PRESS ME</Button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}
          >
            <YStack space>
              <AlertDialog.Description>Surprise!! I'm a pop-up modal!</AlertDialog.Description>
              <AlertDialog.Cancel asChild>
                <Button>Click here to hide me</Button>
              </AlertDialog.Cancel>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
      <Text fos="$3">Press and see what happens!</Text>
    </YStack>
  )
}
