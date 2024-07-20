import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function History() {
    return (
        <Timeline position="alternate-reverse">
            <TimelineItem className='pl-10'>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ minWidth: 175 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                June 2019
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <strong> Code Crusader </strong>
                            </Typography>
                            <Typography variant="body2">
                                At the age of 17, I wrote my first line of code in C and trust me it wasn't "Hello World". I tasted programming for the first time and it was delicious.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='pr-10'>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ minWidth: 190 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                March 2020
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <strong>Delulu me!</strong>
                            </Typography>
                            <Typography variant="body2">
                                Discovered...wanna get a FAANG job? you gotta tackle DSA problems. Ambitious me started learning DSA up until next 5 months during pandemic  before I quit. Trust me those Stack,Queues,LinkedList were super complex tbh
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='pl-10'>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ minWidth: 190 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                August 2021
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <strong>Comeback</strong>
                            </Typography>
                            <Typography variant="body2">
                                Started pursuing a Computer Science degree, returned back to programming after almost an year, started learning full stack software development
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='pr-10'>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ minWidth: 190 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                March 2022
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Open Sourcerer
                            </Typography>
                            <Typography variant="body2">
                                The following months I discovered realm of Open Source, competitively programmed on Codeforces and CodeChef, and made my hands dirty with Dynamic Programming, Trees, Graphs,etc
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='pl-10'>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ minWidth: 190 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                September/October 2022
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <strong>Mini Project</strong>
                            </Typography>
                            <Typography variant="body2">
                                Built a Weather app + Personal Portfolio
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='pr-10'>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ minWidth: 190 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                January 2023
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <strong>Open Source Open Source Open Source</strong>
                            </Typography>
                            <Typography variant="body2">
                                Got my first PR merged in an Open Source Project followed by many more in the upcoming months in EddieHub Community projects like BioDrop
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
