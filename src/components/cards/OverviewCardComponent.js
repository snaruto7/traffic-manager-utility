import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import AnimatedNumber from 'react-animated-number';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer',
        maxWidth: 344,
        maxHeight: 600,
        padding: '16px 32px 16px 32px',
        '&:hover': {
            borderColor: theme.color.lightBlue,
            '&:nth-child(n) > span': {
                color: theme.color.lightBlue
            }
        }
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue2,
        marginBottom: 16,
        minWidth: 102,
        textAlign: 'center'
    },
    value: {
        color: theme.color.veryDarkGrayishBlue,
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center',
        marginTop: 20
    }
}));

function OverviewCardComponent({ className = '', title, value, onClick}) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const composedClassName = [classes.container, className].join(' ');
    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
    }

    return (
        <Column flexGrow={1} className={composedClassName} horizontal='center' vertical='center' onClick={onItemClicked} >
            <span className={classes.title}>{title}</span>
            <br />
            <span className={classes.value}>
            <AnimatedNumber value={value}
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
            </span>
        </Column>
    );
}

export default OverviewCardComponent;
