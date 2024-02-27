import { useState } from 'react';

import { CopyIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  VStack,
} from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SubmitHandler, useForm } from 'react-hook-form';

import { settings } from '../config/settings';
import { ControlledInput } from './ControlledInput';
import { ControlledSelect } from './ControlledSelect';
import { ControlledTextarea } from './ControlledTextarea';

interface SelectOptions {
  value: string | number;
  label: string;
}

interface Inputs {
  style: SelectOptions | null;
  musical_style: string;
  gender: SelectOptions | null;
  body_part: string;
  extra?: string;
}

const validationSchema: yup.ObjectSchema<Inputs> = yup
  .object({
    style: yup
      .object()
      .shape({
        label: yup.string().required(),
        value: yup.string().required(),
      })
      .nullable()
      .required('Selecciona un estilo de Tattoo'),
    musical_style: yup.string().required('Ingresa un estilo musical'),
    gender: yup
      .object()
      .shape({
        label: yup.string().required(),
        value: yup.string().required(),
      })
      .nullable()
      .required('Selecciona un género'),
    body_part: yup.string().required('Ingresa una parte del cuerpo'),
    extra: yup.string(),
  })
  .required();

export const Index = () => {
  const [prompt, setPrompt] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      style: null,
      gender: null,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    var combination = `Imagen de tatuaje estilo ${data.style?.value}, música ${data.musical_style}, con un ${data.body_part} ${data.gender?.value} con fondo blanco. `;
    if (data.extra?.trim() !== '') {
      combination += ` Detalles adicionales: ${data.extra}`;
    }

    setPrompt(combination);
  };

  return (
    <Grid templateColumns={{ base: '1fr', md: '2fr 3fr 2fr' }} gap={4}>
      <GridItem>
        <Stack
          direction={{ base: 'row', md: 'column' }}
          spacing={4}
          alignItems={'start'}
        >
          <Image
            src={'/images/nokoko.svg'}
            alt='Nokoko'
            width={'80px'}
            height={'88px'}
          />
          <Stack direction={{ base: 'row', md: 'column' }}>
            <Heading color={'teal.300'}>Prompt Generator</Heading>
            <VStack alignItems={'start'}>
              <Heading
                size={{ base: 'sm', md: 'lg' }}
                sx={{
                  textTransform: 'none',
                }}
              >
                Sticker
              </Heading>
              <Heading
                size={{ base: 'sm', md: 'lg' }}
                sx={{
                  textTransform: 'none',
                }}
              >
                Tattoo
              </Heading>
              <Heading
                size={{ base: 'sm', md: 'lg' }}
                sx={{
                  textTransform: 'none',
                }}
              >
                T-shirt
              </Heading>
            </VStack>
          </Stack>
        </Stack>
      </GridItem>
      <GridItem>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} alignItems={'start'}>
            <ControlledSelect
              fieldProps={{
                name: 'style',
                options: settings.types,
                placeholder: 'Estilo de Tattoo',
                chakraStyles: {
                  placeholder: (base) => ({
                    ...base,
                    color: '#ff2e95',
                  }),
                },
                variant: 'filled',
                size: 'lg',
                noOptionsMessage() {
                  return 'No hay opciones';
                },
                isSearchable: false,
                selectedOptionStyle: 'check',
              }}
              formControlProps={{
                isInvalid: !!errors?.style,
              }}
              control={control}
              errors={errors?.style?.message}
            />
            <ControlledInput
              fieldProps={{
                name: 'musical_style',
                id: 'musical_style',
                type: 'text',
                placeholder: 'Estilo de musical',
                variant: 'filled',
                size: 'lg',
              }}
              formControlProps={{
                isInvalid: !!errors?.musical_style,
              }}
              control={control}
              errors={errors?.musical_style?.message}
            />
            <ControlledSelect
              fieldProps={{
                name: 'gender',
                options: settings.gender,
                placeholder: 'Género',
                chakraStyles: {
                  placeholder: (base) => ({
                    ...base,
                    color: '#ff2e95',
                  }),
                },
                variant: 'filled',
                size: 'lg',
                noOptionsMessage() {
                  return 'No hay opciones';
                },
                isSearchable: false,
                selectedOptionStyle: 'check',
              }}
              formControlProps={{
                isInvalid: !!errors?.gender,
              }}
              control={control}
              errors={errors?.gender?.message}
            />
            <ControlledInput
              fieldProps={{
                name: 'body_part',
                id: 'body_part',
                type: 'text',
                placeholder: 'Parte del cuerpo a tatuar',
                variant: 'filled',
                size: 'lg',
              }}
              formControlProps={{
                isInvalid: !!errors?.body_part,
              }}
              control={control}
              errors={errors?.body_part?.message}
            />
            <ControlledTextarea
              fieldProps={{
                name: 'extra',
                id: 'extra',
                variant: 'filled',
              }}
              control={control}
            />
            <Button
              type='submit'
              width={'full'}
              size={'lg'}
              colorScheme='blackAlpha'
              sx={{ backgroundColor: 'black' }}
            >
              Generar prompt
            </Button>
          </VStack>
        </form>
      </GridItem>
      <GridItem>
        {prompt == null ? (
          <Heading size={'md'}>Completa el formulario</Heading>
        ) : (
          <>
            <Heading size={'2xl'}>Resultado</Heading>
            <Heading color={'teal.300'} sx={{ textTransform: 'none' }}>
              {prompt}
            </Heading>
            <Box
              sx={{
                mt: 3,
              }}
            >
              <CopyToClipboard text={prompt} onCopy={() => setIsCopied(true)}>
                <CopyIcon boxSize={8} color={'white'} />
              </CopyToClipboard>
              {isCopied && (
                <Badge colorScheme='red' sx={{ ms: 2 }}>
                  Copiado!
                </Badge>
              )}
            </Box>
          </>
        )}
      </GridItem>
    </Grid>
  );
};
