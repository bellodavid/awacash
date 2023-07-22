type IconName =
  | 'add'
  | 'add-circle'
  | 'arrow-down-circle'
  | 'arrow-down-outline'
  | 'arrow-left-outline'
  | 'arrow-right-outline'
  | 'arrow-swap-horizontal'
  | 'arrow-up-circle'
  | 'arrow-up-outline'
  | 'attach-square-outline'
  | 'bank'
  | 'biometric-android-facescan'
  | 'biometric-android-fingerprint'
  | 'biometric-ios-facescan'
  | 'biometric-ios-touchID'
  | 'book'
  | 'box'
  | 'box-tick'
  | 'building'
  | 'calendar'
  | 'call'
  | 'camera'
  | 'card'
  | 'category'
  | 'chart-square'
  | 'chevron-down'
  | 'chevron-down-outline'
  | 'chevron-left'
  | 'chevron-left-outline'
  | 'chevron-right'
  | 'chevron-right-outline'
  | 'chevron-up'
  | 'chevron-up-outline'
  | 'circle'
  | 'close'
  | 'close-circle'
  | 'cloud-add'
  | 'coin'
  | 'copy'
  | 'copy-success'
  | 'document'
  | 'document-normal'
  | 'document-upload'
  | 'electricity'
  | 'empty-wallet-add'
  | 'eye'
  | 'eye-slash'
  | 'finger-circle'
  | 'finger-scan'
  | 'gift'
  | 'global'
  | 'gps'
  | 'home'
  | 'info'
  | 'key'
  | 'key-square'
  | 'key-square-outline'
  | 'lightning'
  | 'link-outline'
  | 'location'
  | 'lock'
  | 'lock-dot'
  | 'logout'
  | 'logout-outline'
  | 'logout-outline'
  | 'menu'
  | 'message'
  | 'message-question'
  | 'message-question-outline'
  | 'mobile'
  | 'money'
  | 'moneys'
  | 'monitor'
  | 'notification'
  | 'notification-outline'
  | 'password-check'
  | 'personalCard'
  | 'piggy'
  | 'profile-circle'
  | 'receipt-2'
  | 'receipt-search'
  | 'scan'
  | 'security-safe'
  | 'security-safe-outline'
  | 'send'
  | 'send-square'
  | 'share'
  | 'shield-tick'
  | 'social-facebook'
  | 'social-instagram'
  | 'social-twitter'
  | 'strongbox'
  | 'swap'
  | 'tick-circle'
  | 'ticket'
  | 'user'
  | 'user-outline'
  | 'verify'
  | 'wallet'
  | 'wallet-add'
  | 'warning'
  | 'wifi-square';

type LogoName = 'logo' | 'logoWhite' | 'logoBlack';

interface PickerItemProps {
  label: string;
  value: string;
  value2?: string;
  value3?: string;
}
