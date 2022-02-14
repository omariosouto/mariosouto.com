import { Box, TextField, Button, useTheme, Text } from '@skynexui/components';

export function NewsletterForm() {
  const theme = useTheme();

  return (
    <Box
      tag='article'
      // id="revue-embed"
      styleSheet={{
        width: '100%',
        flexDirection: 'column',
        backgroundColor: theme.colors.neutral.x999,
        borderRadius: theme.space.x2,
        padding: theme.space.x8,
      }}
    >
      <Text tag='h2' variant='heading4' styleSheet={{ marginBottom: theme.space.x1 }}>
        WeekLinks do Dev Soutinho
      </Text>
      <Text tag='h2' variant='body1' styleSheet={{ color: theme.colors.neutral.x200, marginBottom: theme.space.x2 }}>
        Assine e receba toda semana links que fizeram a minha semana de alguma forma 😋
      </Text>
      <form action="https://newsletter.mariosouto.com/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
        <div className="revue-form-group">
          <label htmlFor="member_email">E-mail</label>
          <TextField
            // id="member_email"
            // className="revue-form-field"
            placeholder="pessoa@gmail.com"
            type="email"
            name="member[email]"
          />
        </div>

        <div className="revue-form-actions">
          <Button
            // name="member[subscribe]"
            // id="member_submit"
            type="submit"
            label="Cadastrar para receber a newsletter!"
            fullWidth
          />
        </div>
      </form>
    </Box>
  )
}
