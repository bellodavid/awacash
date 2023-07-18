import { PinNumpad } from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function ConfirmPin({
  navigation,
}: StackNavigationProps<AuthRoutes, 'ConfirmPin'>): JSX.Element {
  return (
    <PinNumpad
      title="Confirm Transaction Pin"
      subtitle="Enter your pin"
      onPinCompleted={pin => {
        console.log(pin);
        navigation.navigate('AuthSuccess', {
          type: 'signup',
        });
      }}
    />
  );
}
