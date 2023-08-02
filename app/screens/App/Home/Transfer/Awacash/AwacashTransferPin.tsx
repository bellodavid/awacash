import { PinNumpad } from 'components';
import { StackNavigationProps, TransferRoutes } from 'navigation';
// import {} from 'navigation';

export default function AwacashTransferPin({
  navigation,
}: StackNavigationProps<TransferRoutes, 'AwacashTransferPin'>): JSX.Element {
  return (
    <PinNumpad
      title="Transaction Pin"
      subtitle="Enter your pin"
      onPinCompleted={pin => {
        if (pin.length >= 4) {
          navigation.navigate('TransferSuccess');
        }
      }}
    />
  );
}
