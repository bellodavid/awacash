interface User {
  accountNumber: string;
  bankName: string;
  createdBy: string;
  createdByIp: string;
  createdDate: Date;
  email: string;
  firstName: string;
  forceChangeOfPassword: boolean;
  fullName: string;
  id: string;
  isBvnConfirmed: boolean;
  isDeleted: boolean;
  isEmailConfirmed: boolean;
  isPhoneNumberConfirmed: boolean;
  lastName: string;
  middleName: string;
  modifiedBy: string;
  modifiedByIp: string;
  modifiedDate: Date;
  phoneNumber: string;
  profileImageUrl: string;
}

interface Response {
  user: User;
  token: string;
}

interface UserResponse {
  isSuccessful: boolean;
  message: string;
  errors: string[];
  data: Response;
}
