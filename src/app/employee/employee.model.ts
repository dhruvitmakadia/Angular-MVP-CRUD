export class Employee {
    id: number;
    name: string;
    email: string;
    mobile: number;
    addresses: Array<Address>;
    gender: string;
    department: string;
    hireDate: Date;
    permanentEmployee: boolean;
}

export class Address {
    street: string;
    city: string;
    state: string;
    passcode: number;
}

export class Order {
    key: string;
    order: string;
}
