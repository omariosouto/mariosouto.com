import { Box, Text, Image, useTheme } from '@skynexui/components';
import { NewsletterForm } from '@src/components/patterns/NewsletterForm/NewsletterForm';

const blocks = [
  {
    title: '🎬 YouTube',
    description: 'Vídeo novo toda sexta-feira sempre falando de um conteúdo relacionado a programação e tecnologia!',
  },
  {
    title: '📰 Newsletter - WeekLinks DevSoutinho',
    description: 'Receba TODA segunda a WeekLinks do DevSoutinho, 2 min de leitura, sempre 7 dicas legais de coisas que mudaram/fizeram minha semana de alguma forma',
  }
]

interface HomeVideo {
  title: string;
  url: string;
  thumbnail: string;
}
interface HomeScreenProps {
  videos: HomeVideo[]
}
export function HomeScreen(props: HomeScreenProps) {
  console.log(props);
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
          width: '100%',
          flexDirection: 'column',
          marginVertical: theme.space.x6,
        }}
      >
        <Text tag='h2' variant='heading4' styleSheet={{ marginBottom: theme.space.x4 }}>
          Últimos vídeos no YouTube
        </Text>
        <Box
          styleSheet={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: theme.space.x4,
          }}
        >
          {props.videos.map(({ title, thumbnail, url }) => (
            <Box
              key={title}
              styleSheet={{
                flexDirection: 'column',
                flexBasis: `calc(50% - ${theme.space.x4})`,
                display: 'inline-flex',
                overflow: 'hidden',
                borderRadius: theme.space.x2,
              }}
            >
              <a href={url}>
                <Image
                  src={thumbnail}
                  styleSheet={{
                    objectFit: 'cover',
                    aspectRatio: '16 / 9',
                    filter: 'grayscale(1)',
                    transition: '.2s ease-in-out',
                    hover: {
                      filter: 'grayscale(0)',
                    }
                  }}
                  alt={title}
                />
              </a>
                <Text
                  styleSheet={{
                    padding: theme.space.x3,
                    backgroundColor: theme.colors.neutral.x800,
                    flex: 1,
                  }}
                >
                  {title}
                </Text>
            </Box>
          ))}
        </Box>
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
