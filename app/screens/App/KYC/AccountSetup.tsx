import { FlatList, View } from 'react-native';

import { kycSection } from './Data';
import ProcessCard from './Components/ProcessCard';

import { AppRoutes, KYCRoutes, RootNavigationProp } from 'navigation';
import {
  AltHeader,
  BackgroundGradient,
  Button,
  Container,
  SheetContainer,
  VirtualScroll,
} from 'components';

export default function AccountSetup({
  navigation,
}: RootNavigationProp<AppRoutes, KYCRoutes, 'AccountSetup'>): JSX.Element {
  return (
    <BackgroundGradient>
      <AltHeader transparent iconColor="white" label="Account Set Up" />
      <SheetContainer>
        <VirtualScroll>
          <Container>
            <FlatList
              data={kycSection}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ProcessCard
                    onPress={() => {
                      if (item.route) {
                        navigation.navigate('KYCStack', item.route);
                      }
                    }}
                    label={item.label}
                    icon={item.icon}
                    button={item.button}
                    iconColor={item.color}
                  />
                );
              }}
            />
            <View>
              <Button label="Continue" />
            </View>
          </Container>
        </VirtualScroll>
      </SheetContainer>
    </BackgroundGradient>
  );
}
