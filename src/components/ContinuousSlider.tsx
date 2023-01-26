import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function ContinuousSlider(props:any) {
  const [value, setValue] = React.useState<number>(0);
  
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    props.setPosition(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Stack direction="row">
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
    </Box>
  );
}