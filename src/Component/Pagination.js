import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../Component/Pagination.css';

const Paginationn = ()=> {
  return (
    <>
        <Stack className="stack">
      <Pagination count={10} color="primary" />
    </Stack>
    </>
  )
}

export default Paginationn