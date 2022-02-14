import { Box, Text, Image, useTheme } from '@skynexui/components';
import { NewsletterForm } from '@src/components/patterns/NewsletterForm/NewsletterForm';

export function NewsletterScreen() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: theme.space.xcontainer_md,
        paddingHorizontal: theme.space.x4,
        margin: 'auto',
      }}
    >
      <style jsx global>{`
        body {
          background-color: ${theme.colors.neutral.x900};
          color: ${theme.colors.neutral.x000};
        }
      `}</style>
      <a href="/">
        <Image
          styleSheet={{
            width: '200px',
            height: '200px',
            marginHorizontal: 'auto',
            marginVertical: theme.space.x4,
            borderRadius: '100%',
          }}
          src='https://github.com/omariosouto.png' alt='Minha foto de perfil'
        />
      </a>

      <Text tag='h1' variant='heading2' styleSheet={{ color: theme.colors.primary.x500, lineHeight: '1' }}>
        Mario Souto
      </Text>
      <Text tag='h2' variant='heading3' styleSheet={{ lineHeight: '1.5' }}>
        Dev Soutinho
      </Text>

      <Box
        styleSheet={{
          marginVertical: theme.space.x6,
        }}
      >
        <Text tag="p" variant='body1'>
          Sempre no 220v, atrás de um filme/rolê e codando desafios em JS. Adoro trabalhar com a web e compartilhar sobre isso na Alura, Nubank e no meu canal do YouTube DevSoutinho
        </Text>
      </Box>

      <Box
        styleSheet={{
          maxWidth: theme.space.xcontainer_sm,
          marginVertical: theme.space.x6,
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <NewsletterForm />
      </Box>
    </Box>
  );
}
