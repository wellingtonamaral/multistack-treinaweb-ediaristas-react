import React from 'react';
// import { } from '@mui/material';
import { ItemCounterContainer, CirleButton } from './ItemCounter.style';

export interface ItemCounterProps {
    label: string;
    plural: string;
    counter: number;
    onInc: () => void;
    onDec: () => void;

}

const ItemCounter: React.FC<ItemCounterProps> = ({
        label,
        plural,
        counter = 0,
        onInc,
        onDec,

}) => {
    
    return (
        <ItemCounterContainer>
            <CirleButton onClick={onDec}>
                <i className='fa-solid fa-minus'></i>
            </CirleButton>
            <span>
                {counter} {counter > 1 ? plural : label }
            </span>
            <CirleButton onClick={onInc}>
                <i className='fa-solid fa-plus'></i>
            </CirleButton>
        </ItemCounterContainer>
    );
}

export default ItemCounter;