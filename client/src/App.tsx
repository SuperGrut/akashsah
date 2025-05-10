import { Avatar, Box, Link, Stack, Tab, Tabs, Typography } from "@mui/material"
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Software from "./components/Software";
import History from "./components/History";
import ReactGA from "react-ga4";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
ReactGA.initialize("G-99EG8NR3EB");

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className='h-[50vh] w-[100vw] bg-gradient-to-r from-[#000000] via-[#000000] to-[#222222] flex justify-center items-center flex-col'>
        <Box className='shadow-lg'>
          <Avatar sx={{ width: 200, height: 200 }} >
            <img src="/Grut.jpg" alt="Profile Picture" />
          </Avatar>
          <Typography className="font-sans text-2xl antialiased font-bold text-gray-100 text-center mt-6">
            <p>Akash Sah</p>
          </Typography>
        </Box>
        <Stack direction='row' spacing={2} className='mt-4 mb-3'>
          <Link href='https://www.github.com/SuperGrut' target="_blank" rel="noopener" className="size-auto">
            <FaGithub size={24} className=" " />
          </Link>
          <Link href='https://www.linkedin.com/in/akash-sah-a648b521b' target="_blank" rel="noopener" className="size-auto">
            <FaLinkedin size={24} className=" " />
          </Link>
          <Link href='https://www.x.com/SuperGrut/' target="_blank" rel="noopener" className="size-auto">
            <FaXTwitter size={24} className=" " />
          </Link>
          <Link href='https://www.instagram.com/akashhsahh/' target="_blank" rel="noopener" className="size-auto">
            <FaInstagram size={24} className=" " />
          </Link>
        </Stack>
      </Box>
      <Box className="text-center">
        <Box>
          <Box className="flex justify-center items-center">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="softwares" {...a11yProps(0)} />
              <Tab label="open-source" {...a11yProps(1)} />
              <Tab label="my history" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Software />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          This Page in under construction
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <History />
        </CustomTabPanel>
      </Box>
    </>
  )
}

export default App
