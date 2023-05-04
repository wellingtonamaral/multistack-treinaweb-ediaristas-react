import React from 'react';
import {
    AccordionActions,
    AccordionDetails,
    AccordionSummary
 } from '@mui/material';
 import { AccordionStyled } from './DataList.style';

export interface DataListProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    actions?: React.ReactNode;
}

const DataList: React.FC<DataListProps> = ({
    header, 
    body, 
    actions
}) => {
  return (
    <AccordionStyled>
      <AccordionSummary expandIcon={<i className="fa-solid fa-down"></i>}>
       {header}
      </AccordionSummary>
      <AccordionDetails> {body} </AccordionDetails>
      {actions && <AccordionActions>{actions} </AccordionActions>}
    </AccordionStyled>
  );
};

export default DataList;