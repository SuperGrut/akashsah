import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { GiPlayButton } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
const Software = () => {
    return (
        <>
            <Box className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="./public/docgpt.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            DocGPT
                        </Typography>
                        <Typography className='h-10' variant="body2" color="text.secondary">
                            A GPT-3.5-turbo powered document summarizer
                        </Typography>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                        <Button size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Play
                        </Button>
                        <Button size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="./public/meet.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            meet
                        </Typography>
                        <Typography className=' h-10' variant="body2" color="text.secondary">
                            Meet stranger of your choice
                        </Typography>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                    <Button size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Play
                        </Button>
                        <Button size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="./public/gcompiler.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            G Compiler
                        </Typography>
                        <Typography className=' h-10' variant="body2" color="text.secondary">
                            A toy programmming called G-Programming Language
                        </Typography>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                    <Button size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Play
                        </Button>
                        <Button size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className=' font-sans'>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="./public/drop.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='font-sans' gutterBottom variant="h5" component="div">
                            drop.
                        </Typography>
                        <Typography className='h-10' variant="body2" color="text.secondary">
                            A platform to host your frontend application
                        </Typography>
                    </CardContent>
                    <CardActions className='flex justify-center'>
                    <Button size="small" className='font-sans'>
                            <GiPlayButton className='size-4' />
                            Play
                        </Button>
                        <Button size="small" className="font-sans">
                            <FaGithub className='size-4 mr-1' />
                            Source Code
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>

    )
}

export default Software