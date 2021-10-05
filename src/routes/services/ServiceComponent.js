import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { serviceList} from '../../constants';
import { createUseStyles } from 'react-jss';
import Azure from 'azure';
import MsRest from 'ms-rest-azure';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});


MsRest.loginWithServicePrincipalSecret(
    'clientId or appId',
    'secret or password',
    'domain or tenantId',
    (err, credentials) => {
      if (err) throw err
  
      let storageClient = Azure.createStorageManagementClient(credentials, 'subscription-id');
  
      // ..use the client instance to manage service resources.
      console.log("Authenticated");
    }
  );

function ServiceComponent() {
    const classes = useStyles();
    return (
        <Column>
            <Row className={classes.container}>
                <Column flexGrow={0} className={classes.mainBlock}>
                    <div className={classes.contentBlock}>
                    <p>ServiceName</p>
                    </div>
                    <div className={classes.contentBlock}>
                        <select>
                        {
                            serviceList.map((item, i) =>{
                                return(
                                    <option key={i}>
                                    {item.value}
                                    </option>
                                )
                            })
                        }
                        </select>
                    </div>
                </Column>
            </Row>
        </Column>
    );
}

export default ServiceComponent;
