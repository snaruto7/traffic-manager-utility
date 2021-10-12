import React, { useMemo, useState, useEffect } from 'react';
import Table from '../../components/table/Table'
import "./TmSummary.css";
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

function TmSummary(props){
    const classes = useStyles();
    const env = props.env
    const [loadingData, setLoadingData] = useState(true);
    const columns = useMemo(() => [
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Status",
          accessor: "profileStatus",
        },
        {
            Header: "FQDN",
            accessor: "dnsConfig.fqdn",
        },
        {
            Header: "First Priority",
            accessor: "endpoints[0].name"
        },
        {
            Header: "Second Priority",
            accessor: "endpoints[1].name"
        },

      ]);

      const [data, setData] = useState([]);

      useEffect(() => {
        async function getData(){
            try{
                var url = "/tm/" + env + "/summary";
                var data = await fetch(url)
                    .then(res => (res.ok ? res : Promise.reject(res)))
                    .then(res => res.json())
                setData(data.profiles);
                
                setLoadingData(false);
            } catch(err){
                console.log(err)
            }
        }
        if (loadingData) {
          
          getData();
        }
      }, []);

      return (
        <div className={classes.contentBlock}>
          {/* here you check if the state is loading otherwise if you wioll not call that you will get a blank page because the data is an empty array at the moment of mounting */}
          {loadingData ? (
            <p>Loading Please wait...</p>
          ) : (
            <Table columns={columns} data={data} />
          )}
        </div>
      );
}



export default TmSummary;