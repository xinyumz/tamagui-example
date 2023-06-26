import { XStack, YStack, Image, styled } from '@my/ui'

import React from 'react'
import { useLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { SolitoImage } from 'solito/image'
import NextImage from 'next/image'
import { Image as RNImage } from 'react-native'

import { myParagraphs } from 'app/assets/my-paragraphs'
import { MyP } from 'app/components/sections'
import { MyH1, Subtitle } from 'app/components/my-texts'
import { FormattedBlock } from 'app/components/sections'
import { MyBoxL, MyBoxS } from 'app/components/my-boxes'
import { Buttons } from 'app/components/my-buttons'

import { namedColors, hexColors } from 'app/assets/box-colors'
import christmas from '../../assets/images/christmas.png'
import kitten from '../../assets/images/kitten.jpg'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      p="$4"
      m="$8"
      gap="$8"
      $gtXs={{
        m: '$16',
        gap: '$16',
      }}
    >
      <Title />
      <Paragraphs />
      <SeparateBoxes />
      <Drawings2 />
      <BoxList />
      <Buttons />
    </YStack>
  )
}

function Title() {
  return (
    <XStack>
      <MyH1>Solito example app with</MyH1>
      <MotiLink
        href="https://tamagui.dev/"
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          }
        }}
      >
        <MyH1 color="$primary">Tamagui</MyH1>
      </MotiLink>
    </XStack>
  )
}

function Paragraphs() {
  return (
    <YStack maxWidth={1024}>
      {myParagraphs.map((p, i) => (
        <MyP fontFamily={p[0]} key={i}>
          {[p[1], p[2]]}
        </MyP>
      ))}
    </YStack>
  )
}

function SeparateBoxes() {
  return (
    <FormattedBlock gap="$4" flexWrap="wrap">
      {[
        'Individual boxes with named colors:',
        namedColors.map((color, i) => <MyBoxL backgroundColor={color} key={color + i} />),
      ]}
    </FormattedBlock>
  )
}

/*
function Drawings() {
  return (
    <FormattedBlock gap="$2" justifyContent="center" flexWrap="wrap">
      {[
        'Cute drawings:',
        <>
          <Image
            style={{ width: 600, height: 400 }}
            source={christmas}
            resizeMode="contain"
            w="100%"
            h="100%"
            $xs={{ w: '75%', h: '75%' }}
            alt="A cute drawing for SasuSaku family on a Christmas day."
          />
          <Image
            style={{ width: 400, height: 400 }}
            source={kitten}
            resizeMode="contain"
            w="100%"
            h="100%"
            $xs={{ w: '75%', h: '75%' }}
            alt="A cute Sasuke kitten with cherry blossom."
          />
        </>,
      ]}
    </FormattedBlock>
  )
}*/

function Drawings2() {
  return (
    <YStack gap="$2">
      <Subtitle>Cute drawings:</Subtitle>
      <XStack gap="$2" fw="wrap" jc="center">
        <Image
          style={{ width: 600, height: 400 }}
          source={christmas}
          //src="../../assets/images/christmas.png"
          resizeMode="contain"
          w="100%"
          h="100%"
          $xs={{ w: '75%', h: '75%' }}
          alt="A cute drawing for SasuSaku family on a Christmas day."
        />
        <Image
          style={{ width: 400, height: 400 }}
          //src="/../../assets/images/kitten.png"
          source={kitten}
          resizeMode="contain"
          w="100%"
          h="100%"
          $xs={{ w: '75%', h: '75%' }}
          alt="A cute Sasuke kitten with cherry blossom."
        />
      </XStack>
    </YStack>
  )
}

function BoxList() {
  return (
    <FormattedBlock flexWrap="wrap" maxWidth={1024}>
      {[
        'A list of boxes with more colors:',
        hexColors.map((color, i) => <MyBoxS backgroundColor={color} key={color + i} />),
      ]}
    </FormattedBlock>
  )
}
