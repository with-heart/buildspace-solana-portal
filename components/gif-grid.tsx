import {Grid, GridItem, Image} from '@chakra-ui/react'

const TEST_GIFS = [
  'https://64.media.tumblr.com/fa9e689e32ed94756147e9b21f36805d/68e8f65672ed4386-00/s400x600/ed585ad3aa96807aa432981da11f15c7c55d3e28.gifv',
  'https://64.media.tumblr.com/2cfa63601b5f7f7a1d5494ad35e9c590/tumblr_n1n246jC1j1s2fo85o1_400.gifv',
  'https://64.media.tumblr.com/498eb0d7bb2b502de34e2de4776bcc63/tumblr_p3a4g5vMlg1uvuzqko1_500.gifv',
  'https://64.media.tumblr.com/10d35d05d6747c4c4b5ddd4b50cc3553/63e665268ec44d64-5a/s640x960/db58f6e0fffc3619b678d76af7a78d8894af5b0d.gifv',
  'https://64.media.tumblr.com/81ecb2f034fefcb5ccb839a22b914a47/3092d0a5d2afd63c-9e/s400x600/f1a4f933ad4baf3448ed8d9c85ab0ba10d2cb748.gifv',
  'https://64.media.tumblr.com/a610fc9e404a28cef6263cadd35a5eb9/d683f2c5b263c8a8-9d/s640x960/ee8373ce86bd8716abd1ecf26f4dd5e8c2a861e0.gifv',
]

export const GifGrid = () => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={6}
      justifyItems="center"
      w="full"
    >
      {TEST_GIFS.map((gif) => (
        <Image
          key={gif}
          src={gif}
          alt=""
          alignSelf="center"
          borderRadius="10px"
          objectFit="cover"
        />
      ))}
    </Grid>
  )
}
