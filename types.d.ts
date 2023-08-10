type RegisterUser={
    username:string,
    email:string,
    password:string,
    otp:string|number,
    accountType:string
}

type LoginUser={
    email:string,
    password:string
}
type CheckoutDetails={
    name:string,
    country:string,
    state:string,
    streetAddress:string,
    city:string,
    phoneNumber:number
}