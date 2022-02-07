import { Box, Text, useTheme } from '@skynexui/components'

// Fix: add a way to add random CSS properties
enum Templates {
  COVER = 'COVER',
  DEFAULT = 'DEFAULT'
}
const templatesBy: Record<Templates, (props: Slide) => JSX.Element> = {
  COVER(props) {
    const theme = useTheme();
    return (
      <Box
        styleSheet={{
          scrollSnapAlign: 'start',
          flexDirection: 'column',
          width: '100vw',
          minHeight: '100vh',
          padding: '5%',
          borderTop: `15px solid ${theme.colors.primary.x500}`,
        }}
      >
        <Text
          tag="h1"
          variant='display1'
          styleSheet={{
            lineHeight: '1',
            whiteSpace: 'pre',
            marginBottom: theme.space.x4,
          }}
        >
          {props.title.split(' ').join('\n')}
        </Text>
        <Text
          variant='heading4'
        >
          {props.subtitle}
        </Text>
        <Text>{props.description}</Text>
      </Box>
    )
  },
  DEFAULT(props) {
    const theme = useTheme();

    return (
      <Box
        styleSheet={{
          scrollSnapAlign: 'start',
          flexDirection: 'column',
          width: '100vw',
          minHeight: '100vh',
          padding: '5%',
          borderTop: `15px solid ${theme.colors.primary.x500}`,
        }}
      >
        <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text>
        <Text>{props.description}</Text>
      </Box>
    )
  },
}

interface Slide {
  title?: string;
  subtitle?: string;
  description?: string;
  template: Templates;
  backgroundImage?: string;
}
const slides: Array<Slide> = [
  {
    title: 'Mario Souto',
    subtitle: `Midia kit ${new Date().getFullYear()}`,
    template: Templates.COVER,
  },
  {
    title: 'Quem é ',
    subtitle: `Mario Souto?`,
    description: 'Especialista em desenvolvimento web, começou a programar com 11 anos e não parou mais! Atualmente é Engenheiro de Software no Nubank, GitHub Star, Microsoft MVP e Alura Star. Criador e diretor do Canal DevSoutinho no YouTube, com foco no mundo da tecnologia e programação e que vem crescendo absurdamente atingindo a marca de 50k inscritos e mais de 2 milhões de views em 2 anos',
    template: Templates.DEFAULT,
  },
];

export default function Index() {
  return (
    <Box
      styleSheet={{
        overflow: 'scroll',
        scrollSnapType: 'both mandatory',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      {slides.map((slide) => {
        const SlideComponent = templatesBy[slide.template];
        return <SlideComponent {...slide} />
      })}
    </Box>
  )
}
