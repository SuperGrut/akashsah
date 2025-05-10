import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { GiPlayButton } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Software = () => {
    return (
        <>
            <Box className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-[#f2f2f2]">
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="./docgpt-one.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            DocGPT
                        </Typography>
                        <Typography className='h-10' variant="body2" color="text.secondary">
                            a QnA with PDF tool powered by Google gemini-2.5-pro
                        </Typography>
                        {/* <Box className="flex justify-center">
                            <Alert severity="info" className='font-mono'>Under Deployment</Alert>
                        </Box> */}
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
                        sx={{ height: 240 }}
                        image="./meet-app.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            Meet
                        </Typography>
                        <Typography className=' h-10' variant="body2" color="text.secondary">
                            meet random strangers across the globe
                        </Typography>
                        {/* <Box className="flex justify-center bg-white-100">
                            <Alert severity="warning" className='font-mono'>Under Development</Alert>
                        </Box> */}
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
                        sx={{ height: 240 }}
                        image="./csverse.png"
                        title="green iguana"
                        className='p-6'
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            CSVerse
                        </Typography>
                        <Typography className=' h-10' variant="body2" color="text.secondary">
                            discover and share Computer Science Resources and get ranked on leaderboard
                        </Typography>
                        {/* <Box className="flex justify-center">
                            <Alert severity="error" className='font-mono'>Planned</Alert>
                        </Box> */}
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