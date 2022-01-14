import { demo } from "@omariosouto/commons";
import { Box, Text } from '@skynexui/components';

export function HomeScreen() {
    return (
      <Box>
        <Text variant='heading1' tag="h1">
          mariosouto.com
        </Text>
        <Text variant='body2' tag="p">
          Commons: @omariosouto/{demo}
        </Text>
      </Box>
    );
  }
  