import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { serviceList} from '../../constants';
import { createUseStyles } from 'react-jss';

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

function DashboardComponent() {
    const [data, setData] = React.useState(null);
    const classes = useStyles();
    React.useEffect(() => {
        fetch("/us")
          .then((res) => (res.ok ? res.json() : Promise.reject(res) ))
          .then((data) => setData(data.message));
      }, []);
    return (
        <Column>
            <Row className={classes.container}>
                <Column flexGrow={0} className={classes.mainBlock}>
                    <div className={classes.contentBlock}>
                        <p>{!data ? "Loading..." : data}</p>
                    </div>
                </Column>
            </Row>
        </Column>
    );
}

export default DashboardComponent;
