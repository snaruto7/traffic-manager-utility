const { credentials, subscriptionId } = require( './credential' );
const { TrafficManagerManagementClient } = require("@azure/arm-trafficmanager");

const tmClient = new TrafficManagerManagementClient(credentials, subscriptionId);

let WithDevSubscriptionList = function(){

    return result = tmClient.profiles.listBySubscription()
    .then(result=>{
        return result.filter(ele => ele.name.includes("us-dev"));
    })
}
let UsDev = WithDevSubscriptionList()

UsDev.then(function(result){
    console.log(result);
})

// let DevProfilesNumber = function(){

//     return result = tmClient.profiles.listBySubscription()
//     .then(result=>{
//         return result.filter(ele => ele.name.includes("us-dev")).length;
//     })
// }
// let DevProfiles = DevProfilesNumber()

// DevProfiles.then(function(result){
//     return result;
// })

// let WithQASubscriptionList = function(){

//     return result = tmClient.profiles.listBySubscription()
//     .then(result=>{
//         return result.filter(ele => ele.name.includes("us-qa"));
//     })
// }
// let UsQA = WithQASubscriptionList()

// UsQA.then(function(result){
//     return result;
// })

// let QaProfilesNumber = function(){

//     return result = tmClient.profiles.listBySubscription()
//     .then(result=>{
//         return result.filter(ele => ele.name.includes("us-qa")).length;
//     })
// }
// let QaProfiles = QaProfilesNumber()

// QaProfiles.then(function(result){
//     return result;
// })

// let WithUatSubscriptionList = function(){

//     return result = tmClient.profiles.listBySubscription()
//     .then(result=>{
//         return result.filter(ele => ele.name.includes("us-uat"));
//     })
// }
// let UsUat = WithUatSubscriptionList()

// UsUat.then(function(result){
//     return result;
// })

// let UatProfilesNumber = function(){

//     return result = tmClient.profiles.listBySubscription()
//     .then(result=>{
//         return result.filter(ele => ele.name.includes("us-uat")).length;
//     })
// }
// let UatProfiles = UatProfilesNumber()

// UatProfiles.then(function(result){
//     return result;
// })

module.exports = UsDev