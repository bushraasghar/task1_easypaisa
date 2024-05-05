// You have to make an easypaisa app task in which you have to perform following operations like transfer money,
//receive money, bill payments, easy load bundles, cash back, savings etc

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.green("Easypaisa"));

console.log(chalk.blackBright("Pakistan's no 1 payment app"));

const  myBalance:number = 10000;
// To make an account
let answer:any = await inquirer.prompt(
    [

  {
    name: "app ",
    message: "To open an easypaisa account you need to be atleast 18 years of age and need",
    type: "list",
    choices: ["valid CNIC number", "Active pakistani mobile number"],
  },

  {
    name:"cnicnum",
    message:"Hi! please enter your cnic number",
    type:"number"
      
    }
  ,
  
  {
    name:"mobilenum",
    message:"Hi! please enter your mobile number",
    type:"number"

  }
  

  
]
// verification of account
);
if (answer.cnicnum == "valid CNIC number"){
  console.log("varified");
  
}

 else if(answer.mobilenum == "Active pakistani mobile number" ){
    console.log("varified");
    
}

  
let operation = await inquirer.prompt([
  {
    name:"action",
    message:"Which action you have to be perform?",
    type:"list",
    choices:["transfer money" , "bill payment" , "easyload" , "mobile packages" , "my balance"]

}

])

//for selection of transfer money option  

if(operation.action == "transfer money")
  
  {
  let transfer = await inquirer.prompt([{
    name:"amount",
    message:"Enter mobile number",
    type:"number"
  },
  {
    name:"rupees",
    message:"enter your amount",
    type:"number"
  }
]

  )

  
if(transfer.rupees <= myBalance){
  console.log(chalk.greenBright("Money transffered successfully"));
   }else{
   console.log(chalk.red("Insufficiant balance! please recharge"));
  
 }
 let remrupees = myBalance - transfer.rupees
 console.log(chalk.black("Your remaining balance is ") + remrupees);
 
 }
// for selection bill payment option
if(operation.action == "bill payment"){
  let payment = await inquirer.prompt([
    {
    name:"bill",
    message:"Select bill type",
    type:"list",
    choices:["Electricity","Gas"]
  },
  {
    name:"billpayment",
  message:"enter your amount",
  type:"number"

  },
 
])
if(payment.billpayment <= myBalance){
console.log(chalk.bold.blue("Bill paid"))
}
// if (operation.gaspayment == myBalance){
//   console.log("Bill Paid")
//   }
else{
    console.log(chalk.redBright("your balance is not enough"))
    
  }
let remamount = myBalance - payment.billpayment
console.log(chalk.black(("Your remaining balance is ") + remamount));

}
   
// for select easypaisa option
if(operation.action == "easyload"){
  let load = await inquirer.prompt([
    {
    name:"balance",
    message:"Tap to enter number",
    type:"number"
  },
  {
    name:"network",
    message:"Select network",
    type:"list",
    choices:["Telenor","Ufone","Warid","Jazz","Zong"] 
  },
{

  name :"loading",
  message:"Rs: ",
  type:"number"

}
])
  if(load.loading <= myBalance){
    console.log(chalk.magenta("Transaction Successful"));
    console.log(chalk.blackBright(("Total Amount: ") + load.loading));
    
  }
  else{
    console.log(chalk.blackBright("Your balance is not enough for the transaction"));
    
  }
  let rembal = myBalance - load.loading
  console.log(chalk.blackBright("Your remaining balance is ") + rembal);
  
}

// for mobile pkg option
if (operation.action == "mobile packages") {
  let pkg = await inquirer.prompt([
    {
      name:"mobilepkg",
      message:"Buy Packages",
      type:"list",
      choices:["Telenor","Ufone","Warid","Jazz","Zong"]
  },

  {
    name:"num",
    message:"Enter mobile number",
    type:"number"

  },
  {
    name:"bundles",
    message:"Select Offer",
    type:"list",
    choices:["Whatsapp 7 days offer Rs 100","facebook 3 days offer Rs 150","Whatsapp plus offer 30 days Rs 110","Haftawar offer Rs 300","Social bundles Rs 500", "youtube 3 days Rs 170"]
  }
])
if(pkg.bundles){
  console.log(chalk.italic.green("Transaction Successful"))
  console.log(chalk.italic.green("Mobile package has been added"))
}
// else{
  // console.log("Insufficiant Balance");
  
// }
  
}

// mybalance checking
if(operation.action == "my balance"){

  console.log(chalk.black("your current balance is ") + myBalance);

}


