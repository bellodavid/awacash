import { PinNumpad } from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function CreatePin({
  navigation,
}: StackNavigationProps<AuthRoutes, 'CreatePin'>): JSX.Element {
  return (
    <PinNumpad
      title="Create Transaction Pin"
      subtitle="Enter your pin"
      onPinCompleted={pin => {
        console.log(pin);
        navigation.navigate('ConfirmPin');
      }}
    />
  );
}
