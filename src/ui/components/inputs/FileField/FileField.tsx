import React, {ChangeEvent, useState} from 'react';
import  TextField  from '../TextField/TextField';
import { TextFieldProps } from '@mui/material';
 import { UploadIcon, FileContainer } from './FileField.style';

export interface FileFieldProps extends Omit<TextFieldProps, 'onChange'> {
    onChange: (files: FileList) => void;
}

const FileField: React.FC<FileFieldProps> = ({onChange, ...props}) => {
    const [filePath, SetFilePath] = useState('');

    function handleFileChange(event: ChangeEvent){
        const target = event.target as HTMLInputElement,
        files = target.files;

        if (files !== null && files.length) {
            SetFilePath(files[0]?.name || '');
            onChange(files);
        }
    }
    return (
      <FileContainer>
        <TextField
          label={"Selecione o arquivo"}
          value={filePath}
          InputProps={{
            endAdornment: <UploadIcon className="fa-solid fa-upload" />,
          }}
          {...props}
          fullWidth
        />
        <TextField 
        type={"file"} 
        {...props} 
        fullWidth 
        onChange={handleFileChange} />
      </FileContainer>
    );
}

export default FileField;