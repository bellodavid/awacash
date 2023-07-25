declare module 'authModels' {
  export interface LoginModel {
    email: string;
    password: string;
  }

  export interface RegisterModel {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    pin: string;
    confirmPin: string;
    hash: string;
  }

  export interface ChangePasswordModel {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }

  export interface ChangePinModel {
    oldPin: string;
    newPin: string;
    confirmNewPin: string;
  }
  export interface SendPhoneVerificationModel {
    phoneNumber: string;
  }

  export interface VerifyPhoneModel {
    phoneNumber: string;
    code: string;
    hash: string;
  }
}

declare module 'api-response' {
  export interface ErrorResponse {
    data?: unknown;
    isSuccessful: boolean;
    message: string;
    errors: string[];
  }

  export interface APIResponse<T> {
    isSuccessful: boolean;
    message: string;
    errors: string[];
    data: T;
  }

  export interface IBTData {
    code: string;
    transactionReference: string;
  }

  export interface NEData {
    code: string;
    name: string;
  }

  export interface GetBanksData {
    bankCode: string;
    bankName: string;
  }

  //Create Savings Data
  export interface CSData {
    balance: number;
    customerId: string;
    deductionFrequency: number;
    deductionaAmount: number;
    duration: number;
    interestRate: number;
    maturityDate: Date;
    reason: string;
    savingType: number;
    startDate: Date;
    targetAmount: number;
  }

  //Savings Configuration Data
  export interface SCData {
    createdBy: string;
    createdByIp: string;
    createdDate: Date;
    id: string;
    isDeleted: boolean;
    modifiedBy?: string;
    modifiedByIp?: string;
    modifiedDate?: string;
    planDescription: string;
    planDuration: number;
    planInterestRate: number;
    planName: string;
    savingType: number;
    status: boolean;
  }

  export interface PromoData {
    createdBy: string;
    createdByIp: string;
    createdDate: Date;
    description: string;
    hasImage: boolean;
    id: string;
    imageUrl: string;
    isDeleted: boolean;
    modifiedBy?: string;
    modifiedByIp?: string;
    modifiedDate?: Date;
    status: number;
    title: string;
  }

  export interface GetBalanceData {
    fullName: string;
    balance: number;
  }

  export interface TransactionData {
    amount: number;
    billerId?: string;
    billerName?: string;
    createdBy?: string;
    createdByIp?: string;
    createdDate: Date;
    creditAccountName: string;
    creditAccountNumber: string;
    currency: string;
    customerId: string;
    debitAccountName: string;
    debitAccountNumber: string;
    destinationBankCode?: string;
    destinationBankName?: string;
    fee: number;
    id: string;
    isDeleted: boolean;
    modifiedBy?: string;
    modifiedByIp?: string;
    modifiedDate?: Date;
    narration: string;
    paymentItemCode?: string;
    paymentItemName?: string;
    paymentReference?: string;
    recordType?: 1 | 2;
    responseCode?: string;
    sessionId?: string;
    status?: string;
    transactionReference: string;
    transactionType?: string;
  }

  export interface TransactionPaged {
    results: TransactionData[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  }

  export interface BeneficiaryData {
    accountName: string;
    accountNumber: string;
    bankCode?: string;
    bankName: string;
    beneficaryType: number;
    biller?: string;
    createdBy: string;
    createdByIp: string;
    createdDate: Date;
    customerId: string;
    id: string;
    isDeleted: boolean;
    meterNumber?: string;
    modifiedBy?: string;
    modifiedByIp?: string;
    modifiedDate?: Date;
    phoneNumber?: string;
    preferedName?: string;
    status: number;
  }

  export interface CardConfigData {
    issuerName: string;
    price: number;
    cardType: number;
    status: number;
    id: string;
    createdBy: string;
    createdByIp: string;
    createdDate: Date;
    modifiedBy?: string;
    modifiedByIp?: string;
    modifiedDate?: Date;
    isDeleted: boolean;
  }
}
declare module 'transferModels' {
  //InterBank
  export interface IBTModel {
    debitAccount: string;
    bankCode: string;
    creditAccount: string;
    amount: number;
    transactionPin: string;
    narration: string;
    transactionReference: string;
  }

  //LocalBank
  export interface LTModel {
    debitAccount: string;
    creditAccount: string;
    amount: number;
    transactionPin: string;
    narration: string;
    transactionReference: string;
  }

  export interface NEModel {
    bankCode: string;
    accountNumber: string;
  }

  export interface TFModel {
    amount: number;
    type: 1 | 2 | 3 | 4 | 5;
  }
}

declare module 'savingsModel' {
  export interface CreateSavingsModel {
    reason: string;
    targetAmount: number;
    deductionFrequency: number;
    savingConfigId: string;
  }
}

declare module 'transactionModel' {
  export interface TPModel {
    TransactionType?: number;
    RecordType?: number;
    AccountNumber?: string;
    PageIndex?: number;
    PageSize?: number;
    GlobalSearch?: string;
    StartDate?: Date;
    EndDate?: Date;
    OrderBY?: string;
    ByDescending?: boolean;
  }
}

declare module 'disputeModel' {
  export interface DisputeModel {
    accountNumber: string;
    email: string;
    phoneNumber: string;
    amount: number;
    transactionDate: Date;
    comment: string;
  }
}

declare module 'customerModel' {
  export interface BalanceModel {
    fullName: string;
    balance: number;
  }

  export interface ProfileModel {
    profileBase64: string;
  }

  export interface BVNModel {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    accessToken: string;
  }
}

declare module 'cardRequestModel' {
  // CardRequestModel
  export interface CRModel {
    cardName: string;
    cardType: number;
    deliveryAddress: string;
    cardConfigId: string;
  }
}
