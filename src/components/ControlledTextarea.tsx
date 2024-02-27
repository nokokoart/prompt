import {
  FormControl,
  FormControlProps,
  FormErrorMessage, // FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

import { type Control, Controller } from 'react-hook-form';

interface FieldProps extends TextareaProps {
  name: string;
}

interface FormControlInnerProps {
  icon?: React.ReactNode;
  label?: string;
  helperText?: string;
}

interface ControlledTextareaProps {
  fieldProps: FieldProps;
  formControlProps?: FormControlProps;
  formControlInnerProps?: FormControlInnerProps;
  control: Control<any>;
  errors?: string;
}

export const ControlledTextarea = (props: ControlledTextareaProps) => {
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    errors,
  } = props;

  const { label, helperText } = formControlInnerProps || {};

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
          <Textarea {...fieldProps} onChange={onChange} value={value} />
          {helperText != null && <FormHelperText>{helperText}</FormHelperText>}
          {errors != null && <FormErrorMessage>{errors}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
};
