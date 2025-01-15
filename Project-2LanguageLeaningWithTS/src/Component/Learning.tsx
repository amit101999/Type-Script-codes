import { ArrowBack, VolumeUp } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Learning = () => {

  const [count, setCount] = useState<number>(0)
  const params = useSearchParams()[0].get('language') as LangType

  const navigate = useNavigate()

  const mexthandler = (): void => {
    setCount(count + 1)
  }



  return (
    <Container maxWidth="sm" sx={{paddding : "1rem"}}>
      <Button onClick=
        {count === 0 ? () => navigate("/") : () => setCount(count - 1)} >
        <ArrowBack />
      </Button>
      <Typography m={"2rem"}>Learning Made Easy</Typography>
      <Stack direction={"row"} spacing={"1rem"} >
        <Typography variant={"h4"}>
          { count +1} - {"sample"}
        </Typography>
        <Typography color='blue'  variant={"h4"}>
          : {"lol"}
        </Typography>
        <Button sx={{ borderRadius :"50%"}}>
        <VolumeUp />
      </Button>
      </Stack>
      <Button variant='contained' fullWidth sx={{ margin :"3rem 0"}} >
        Next
      </Button>
    </Container>
  )
}

export default Learning