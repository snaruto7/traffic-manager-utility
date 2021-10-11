import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import { useAsync } from 'react-async';
import AnimatedNumber from 'react-animated-number';

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

async function Profiles(){
    try{
        var data = await Promise.all([
            fetch("/tm/dev")
            .then(res => res.json()),
            fetch("/tm/qa")
            .then(res => res.json()),
            fetch("tm/uat")
            .then(res => res.json())
        ]);
        return data;
    } catch(err){
        console.log(err);
    }
}
//   await fetch("/tm/dev")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json())

// const qaProfiles = async () =>
//     await fetch("/tm/qa")
//       .then(res => (res.ok ? res : Promise.reject(res)))
//       .then(res => res.json())

// const uatProfiles = async () =>
//   await fetch("/tm/uat")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json())

function OverviewComponent(){
    const classes = useStyles();
    //let data = useAsync ({ promise: Profiles })
    const { data, error, isLoading } = useAsync({ promiseFn: Profiles})
    if (isLoading) return "Loading..."
    if (error) return "--"
    if (data)
    return (
        <Column>
            <Row className={classes.container}>
                <Column flexGrow={1} className={classes.mainBlock}>
                    <div className={classes.contentBlock}>
                        <p>DEV</p>
                        <AnimatedNumber component="text" value={data[0].number}
                            style = {{
                                transition: '0.8s ease-out',
                                fontsize: '16',
                                transitionProperty:
                                  'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {opacity: 0.25}
                            )}
                            stepPrecision={1}
                            duration={1200} />
                    </div>
                </Column>
                <Column flexGrow={1} className={classes.contentBlock}>
                    <div className={classes.contentBlock}>
                        <p>QA</p>
                        <AnimatedNumber component="text" value={data[1].number}
                            style = {{
                                transition: '0.8s ease-out',
                                fontsize: '16',
                                transitionProperty:
                                  'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {opacity: 0.25}
                            )}
                            stepPrecision={1}
                            duration={1200} />
                    </div>
                </Column>
                <Column flexGrow={1} className={classes.mainBlock}>
                    <div className={classes.contentBlock}>
                        <p>UAT</p>
                        <AnimatedNumber component="text" value={data[2].number}
                            style = {{
                                transition: '0.8s ease-out',
                                fontsize: '16',
                                transitionProperty:
                                  'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {opacity: 0.25}
                            )}
                            stepPrecision={1}
                            duration={1200} />
                    </div>
                </Column>
            </Row>
        </Column>
    );
}



export default OverviewComponent;