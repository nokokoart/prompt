import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';

import { chakraComponents, Props, Select } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';

interface OptionFields {
  value: number | string;
  label: string;
}

interface FieldProps extends Props {
  name: string;
  options: Array<{ value: number | string; label: string }>;
}

interface FormControlInnerProps {
  label?: string;
  helperText?: string;
}

interface ControlledTextFieldProps {
  fieldProps: FieldProps;
  formControlProps?: FormControlProps;
  formControlInnerProps?: FormControlInnerProps;
  control: Control<any>;
  errors?: string;
  shouldSort?: boolean;
  // errors?: Record<string, { message: string }>;
}

export const ControlledSelect = (props: ControlledTextFieldProps) => {
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    errors,
    shouldSort,
  } = props;

  const { helperText, label } = formControlInnerProps || {};

  // A compare function that compares the label property of two objects
  function compareByLabel(a: OptionFields, b: OptionFields) {
    return a.label.localeCompare(b.label);
  }

  // Sort the array by label in ascending order
  if (shouldSort ?? false) fieldProps.options.sort(compareByLabel);

  return (
    <Controller
      name={fieldProps.name}
      defaultValue={''}
      control={control}
      render={({ field: { onChange, value: fieldValue } }) => {
        return (
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
            <Select
              {...fieldProps}
              value={
                fieldProps.options.length && fieldValue?.value != null
                  ? fieldProps.options.find(
                      (option) => option.value === fieldValue.value
                    )
                  : null
              }
              onChange={onChange}
              useBasicStyles
              isSearchable={fieldProps.isSearchable}
              instanceId={fieldProps.name}
              components={{
                Option: ({ children, ...props }) => {
                  const propsData: any = props.data;

                  return (
                    <chakraComponents.Option {...props}>
                      {children} {propsData.icon != null && propsData.icon}
                    </chakraComponents.Option>
                  );
                },
              }}
            />
            {helperText != null && (
              <FormHelperText>{helperText}</FormHelperText>
            )}
            {errors != null && <FormErrorMessage>{errors}</FormErrorMessage>}
          </FormControl>
        );
      }}
    />
  );
};
