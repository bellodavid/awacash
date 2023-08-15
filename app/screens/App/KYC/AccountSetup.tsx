import { FlatList } from 'react-native';

import { kycSection } from './Data';
import { ProcessCard } from './Components';

import { KYCRoutes, StackNavigationProps } from 'navigation';
import { AltHeader, Button, Container, Divider, VirtualScroll } from 'components';

export default function AccountSetup({
  navigation,
}: StackNavigationProps<KYCRoutes, 'AccountSetup'>): JSX.Element {
  return (
    <>
      <AltHeader iconColor="white" label="Account Set Up" />
      <VirtualScroll>
        <Container backgroundColor="white">
          <FlatList
            data={kycSection}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ProcessCard
                  onPress={() => {
                    if (item.route) {
                      navigation.navigate(item.route);
                    }
                  }}
                  label={item.label}
                  icon={item.icon}
                  button={'Not Done'}
                  iconColor={item.color}
                />
              );
            }}
          />
          <Divider />
          <Button label="Continue" />
        </Container>
      </VirtualScroll>
    </>
  );
}
