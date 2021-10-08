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
    return result;
})

let WithQASubscriptionList = function(){

    return result = tmClient.profiles.listBySubscription()
    .then(result=>{
        return result.filter(ele => ele.name.includes("us-qa"));
    })
}
let UsQA = WithQASubscriptionList()

UsQA.then(function(result){
    return result;
})

let WithUatSubscriptionList = function(){

    return result = tmClient.profiles.listBySubscription()
    .then(result=>{
        return result.filter(ele => ele.name.includes("us-uat"));
    })
}
let UsUat = WithUatSubscriptionList()

UsUat.then(function(result){
    return result;
})