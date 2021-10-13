import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import { useAsync } from 'react-async';
import MiniCardComponent from '../../components/cards/MiniCardComponent';
import TmShortSummary from '../TMSummary/TMShortSummary';
import { convertSlugToUrl } from '../../resources/utilities';
import SLUGS from '../../resources/slugs';

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
        return data;
    } catch(err){
        console.log(err)
    }
}

// const uatProfiles = async () =>
//   await fetch("/tm/uat")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json())

function OverviewTMComponent(){
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
            <Row className={classes.cardRow}>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between'>
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='DEV'
                        value={data[0].number}
                        onClick={() => onClick(SLUGS.overviewTMDevSummary)}
                    />
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between'>
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='QA'
                        value={data[1].number}
                        onClick={() => onClick(SLUGS.overviewTMQASummary)}
                    />
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between'>
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='UAT'
                        value={data[2].number}
                        onClick={() => onClick(SLUGS.overviewTMUATSummary)}
                    />
                </Column>
            </Row>
            <Row className={classes.tasks}>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between'>
                    <div>
                        <TmShortSummary env="dev"/>
                    </div>
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between'>
                    <div>
                        <TmShortSummary env="qa"/>
                    </div>
                </Column>
                <Column flexGrow={1} className={classes.mainBlock} horizontal='space-between'>
                    <div>
                        <TmShortSummary env="uat"/>
                    </div>
                </Column>
            </Row>
        </Column>
    );
}



export default OverviewTMComponent;