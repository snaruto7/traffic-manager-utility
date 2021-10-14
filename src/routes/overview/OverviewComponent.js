import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import OverviewCardComponent from '../../components/cards/OverviewCardComponent';
import { convertSlugToUrl } from '../../resources/utilities';
import SLUGS from '../../resources/slugs';
import { useAsync } from 'react-async';

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
        marginTop: 20,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

async function Profiles(){
    try{
        var data = await Promise.all([
            fetch("/tm/dev")
            .then(res => res.json()),
            fetch("/tm/qa")
            .then(res => res.json()),
            fetch("/tm/uat")
            .then(res => res.json())
        ]);
        var tmProfiles = data[0].number + data[1].number + data[2].number
        return tmProfiles;
    } catch(err){
        console.log(err)
    }
}

function OverviewComponent(){
    const classes = useStyles();
    const { push } = useHistory();
    //let data = useAsync ({ promise: Profiles })
    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }
    const { data, error, isLoading } = useAsync({ promiseFn: Profiles})
    if (isLoading) return "Loading..."
    if (error) return "--"
    if (data)
    return (
        <Column>
            <Row className={classes.cardRow} >
                <Column flexGrow={1} className={classes.mainBlock} >
                    <OverviewCardComponent
                        className={classes.miniCardContainer}
                        title='Traffic-Manager'
                        value={data}
                        onClick={() => onClick(SLUGS.TMExpand)}
                    />
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} >
                    <OverviewCardComponent
                        className={classes.miniCardContainer}
                        title='App Configuration'
                        value='0'
                        onClick={() => onClick(SLUGS.APExpand)}
                    />
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} >
                    <OverviewCardComponent
                        className={classes.miniCardContainer}
                        title='Vault'
                        value='0'
                        onClick={() => onClick(SLUGS.Vault)}
                    />
                </Column>
            </Row>
            <br />
            <Row>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between' >
                    <OverviewCardComponent
                        className={classes.miniCardContainer}
                        title='Jira'
                        value='0'
                        onClick={() => onClick(SLUGS.Jira)}
                    />
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between' >
                    <OverviewCardComponent
                        className={classes.miniCardContainer}
                        title='Release Pipelines'
                        value='0' 
                        onClick={() => onClick(SLUGS.Pipelines)}
                    />
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between' >
                    <OverviewCardComponent
                        className={classes.miniCardContainer}
                        title='Connections & Health'
                        value='0'
                        onClick={() => onClick(SLUGS.Connections)}
                    />
                </Column>
            </Row>
        </Column>
    );
}



export default OverviewComponent;