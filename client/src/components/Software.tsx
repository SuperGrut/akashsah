import { Box, Button, Chip,Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { GiPlayButton } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Software = () => {
    return (
        <>
            <Box className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-[#f2f2f2]">
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240, padding:"1em 1em 0em 1em", objectFit:'contain' }}
                        image="./docgpt-one.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            DocGPT
                        </Typography>
                        <Typography className='h-10' variant="body2" color="text.secondary">
                            A QnA with PDF tool powered by Google gemini-2.5-pro
                        </Typography>
                        <Box className="pt-4 flex justify-centerf flex-wrap">
                            <Chip label="react" />
                             <Chip label="tailwind" />
                              <Chip label="node" />
                               <Chip label="mongo" />
                                <Chip label="pinecone" />
                                 <Chip label="cloudinary" />
                                  <Chip label="gemini" />
                        </Box>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                        <Button href='https://doc-gpt-one.vercel.app' target='_blank' size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Visit App
                        </Button>
                        <Button href='https://www.github.com/SuperGrut/DocGPT' target='_blank' size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                       sx={{ height: 240, padding:"1em 1em 0em 1em", objectFit:'contain' }}
                        image="./meet-app.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            Meet
                        </Typography>
                        <Typography className=' h-10' variant="body2" color="text.secondary">
                            Meet random strangers across the globe
                        </Typography>
                        <Box className="pt-4 flex justify-centerf flex-wrap">
                            <Chip label="react" />
                             <Chip label="tailwind" />
                              <Chip label="node" />
                               <Chip label="socket" />
                                <Chip label="webrtc" />
                                 
                        </Box>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                        <Button href='https://chatwstrangers.vercel.app' target='_blank' size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Visit App
                        </Button>
                        <Button href='https://github.com/SuperGrut/chatbubble-buddies' target='_blank' size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240, padding:"1em 1em 0em 1em", objectFit:'contain' }}
                        image="./csverse.png"
                        title="green iguana"
                        className='p-6'
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            CSVerse
                        </Typography>
                        <Typography className=' h-10' variant="body2" color="text.secondary">
                            Discover and share Computer Science Resources and get ranked on leaderboard
                        </Typography>
                        <Box className="pt-4 flex justify-centerf flex-wrap">
                            <Chip label="react" />
                             <Chip label="tailwind" />
                              <Chip label="node" />
                               <Chip label="mongo" />
                                <Chip label="youtube data api" />
                                 
                        </Box>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                        <Button href='https://csverse.vercel.app' target='_blank' size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Visit App
                        </Button>
                        <Button href='https://www.github.com/SuperGrut/csverse' target='_blank' size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
                {/* <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="./drop.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            drop.
                        </Typography>
                        <Typography className='h-10' variant="body2" color="text.secondary">
                            A platform to host your frontend application
                        </Typography>
                        <Box className="flex justify-center">
                            <Alert severity="error" className='font-mono'>Planned</Alert>
                        </Box>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                        <Button disabled size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Play
                        </Button>
                        <Button disabled size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card> */}
            </Box>
        </>

    )
}

export default Software