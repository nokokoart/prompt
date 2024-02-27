import {
  FormControl,
  FormControlProps,
  FormErrorMessage, // FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';

import { type Control, Controller } from 'react-hook-form';

interface FieldProps extends InputProps {
  name: string;
}

interface FormControlInnerProps {
  icon?: React.ReactNode;
  label?: string;
  helperText?: string;
}

interface ControlledInputProps {
  fieldProps: FieldProps;
  formControlProps?: FormControlProps;
  formControlInnerProps?: FormControlInnerProps;
  control: Control<any>;
  errors?: string;
}

export const ControlledInput = (props: ControlledInputProps) => {
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    errors,
  } = props;

  const { label, helperText, icon } = formControlInnerProps || {};

  return (
    <Controller
      name={fieldProps.name}
      defaultValue={''}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl {...formControlProps}>
          {label != null && (
            <FormLabel
              sx={
                fieldProps.variant === 'flushed'
                  ? { fontSize: 'sm', mb: 0 }
                  : {}
              }
            >
              {label}
            </FormLabel>
          )}
          <InputGroup>
            {icon}
            <Input {...fieldProps} onChange={onChange} value={value} />
          </InputGroup>
          {helperText != null && <FormHelperText>{helperText}</FormHelperText>}
          {errors != null && <FormErrorMessage>{errors}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
};
