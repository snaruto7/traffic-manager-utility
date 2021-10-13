const { credentials, subscriptionId } = require( './credential' );
const { TrafficManagerManagementClient } = require("@azure/arm-trafficmanager");
const PackageJson = require('./package.json');

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

function GetProfiles(env){
  return result = tmClient.profiles.listBySubscription()
    .then(result =>{
      return result.filter(ele => ele.name.includes(env))
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

app.get('/tm/dev/summary', async (req, res) => { 
  let Profile = GetProfiles("us-dev");

  dev = await Profile.then(function(result){
    return result
  })

  res.send({ profiles: dev });
});

app.get('/tm/qa', async (req, res) => { 
  let Profile = GetProfilesNumber("us-qa");

  qa = await Profile.then(function(result){
    return result
  })

  res.send({ number: qa });
});

app.get('/tm/qa/summary', async (req, res) => { 
  let Profile = GetProfiles("us-qa");

  qa = await Profile.then(function(result){
    return result
  })

  res.send({ profiles: qa });
});

app.get('/tm/uat', async (req, res) => { 
  let Profile = GetProfilesNumber("us-uat");

  uat = await Profile.then(function(result){
    return result
  })

  res.send({ number: uat });
});

app.get('/tm/uat/summary', async (req, res) => { 
  let Profile = GetProfiles("us-uat");

  uat = await Profile.then(function(result){
    return result
  })

  res.send({ profiles: uat });
});

app.get('/version', (req, res) => { 
  res.send({ version: PackageJson.version });
});