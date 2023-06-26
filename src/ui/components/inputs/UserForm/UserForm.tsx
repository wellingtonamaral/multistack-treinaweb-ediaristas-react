import React from 'react';
import { FormContainerStyled } from './UserForm.style';
// import { } from '@mui/material';
// import { Component } from './UserForm.style';

export interface UserFormProps {}

export const UserFormContainer = FormContainerStyled;

const UserForm: React.FC<UserFormProps> = () => {
    return (
        <div>
            <div>UserForm</div>
        </div>
    );
};

export default UserForm;