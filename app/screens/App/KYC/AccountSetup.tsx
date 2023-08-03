import { View } from 'react-native';

import AltHeader from './Components/AltHeader';
import ProcessCard from './Components/ProcessCard';

import { Button } from 'components';
import { BackgroundGradient } from 'components/Screen/BackgroundGradient';
import SheetContainer from 'components/Screen/SheetContainer';
import { pallets } from 'constant';

export default function AccountSetup(): JSX.Element {
  return (
    <BackgroundGradient>
      <AltHeader transparent iconColor="white" label="Account Set Up" />
      <SheetContainer>
        <ProcessCard
          color={pallets.secondary}
          icon="key-square"
          processed
          label="Add your BVN"
          button="Done"
        />
        <ProcessCard
          color={pallets.secondary}
          icon="camera"
          processed
          label="Take a selfie"
          button="Done"
        />
        <ProcessCard
          color={pallets.orange}
          icon="receipt-2"
          label="Upload utility bill
          and valid ID"
          button="Not Done"
        />
        <ProcessCard
          icon="biometric-android-fingerprint"
          label="Enable Biometrics"
          button="Not Done"
        />
        <View style={{ marginTop: 30 }}>
          <Button width="80%" label="Continue" />
        </View>
      </SheetContainer>
    </BackgroundGradient>
  );
}
