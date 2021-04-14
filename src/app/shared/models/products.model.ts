export interface IProductModel {
    accountId: string;
    accountType: string;
    accountState: string;
    accountAmountAvaliable: number;
}

export interface ITransactionModel{
    id: string;
    dateTransaction: string;
    amountTransaction: number;
    description: string;
}
