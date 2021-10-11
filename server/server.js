const { credentials, subscriptionId } = require( './credential' );
const { TrafficManagerManagementClient } = require("@azure/arm-trafficmanager");

const tmClient = new TrafficManagerManagementClient(credentials, subscriptionId);

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

function GetProfilesNumber(env) {
  return result = tmClient.profiles.listBySubscription()
    .then(result=>{
        return  result.filter(ele => ele.name.includes(env)).length;
    })
}
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/us', (req, res) => { 
    res.send({ message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/tm/dev', async (req, res) => { 
  let Profile = GetProfilesNumber("us-dev");

  dev = await Profile.then(function(result){
    return result
  })

  res.send({ number: dev });
});

app.get('/tm/qa', async (req, res) => { 
  let Profile = GetProfilesNumber("us-qa");

  qa = await Profile.then(function(result){
    return result
  })

  res.send({ number: qa });
});

app.get('/tm/uat', async (req, res) => { 
  let Profile = GetProfilesNumber("us-uat");

  uat = await Profile.then(function(result){
    return result
  })

  res.send({ number: uat });
});
