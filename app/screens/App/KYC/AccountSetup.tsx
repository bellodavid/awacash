import AltHeader from './Components/AltHeader';

import { Text } from 'components';
import { BackgroundGradient } from 'components/Screen/BackgroundGradient';
import SheetContainer from 'components/Screen/SheetContainer';

export default function AccountSetup(): JSX.Element {
  return (
    <BackgroundGradient>
      <AltHeader transparent iconColor="white" label="Account Set Up" />
      <SheetContainer>
        <Text>content</Text>
      </SheetContainer>
    </BackgroundGradient>
  );
}
