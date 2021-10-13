import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import Packagejson from '../../../package.json'
import {
    IconIdeas,
    IconOverview,
    IconSubscription,
    IconAppConfigurationLogo,
    IconTrafficManagerLogo
} from '../../assets/icons';
import { convertSlugToUrl } from '../../resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    div : {
        color: "#ffffff",
        opacity: 0.6,
        position: "absolute",
        bottom: 0,
        left: 0,
        fontSize: 16,
    }
});

function SidebarComponent() {
    const [data, setData] = React.useState(null);
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;
    React.useEffect(() => {
        fetch("/version")
          .then((res) => (res.ok ? res.json() : Promise.reject(res) ))
          .then((data) => setData(data.version));
      }, []);

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }
    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.overview}
                title='Overview'
                icon={IconOverview}
                items={[SLUGS.overviewTM, SLUGS.overviewAP]}
            >
                <MenuItem
                    id={SLUGS.overviewTM}
                    title='Traffic-Manager'
                    level={2}
                    icon={IconTrafficManagerLogo}
                    onClick={() => onClick(SLUGS.overviewTM)}/>
    
                <MenuItem
                    id={SLUGS.overviewAP}
                    title='Appconfig'
                    level={2}
                    icon={IconAppConfigurationLogo}
                    onClick={() => onClick(SLUGS.overviewAP)}
                />
            </MenuItem>
            <div className={classes.separator}></div>
            <MenuItem
                    id={SLUGS.overviewTMExpand}
                    title='Traffic-Manager'
                    icon={IconTrafficManagerLogo}
                    children={[SLUGS.overviewTMDev, SLUGS.overviewTMQA, SLUGS.overviewTMUAT]}
                >
                    <MenuItem
                        id={SLUGS.overviewTMDev}
                        title='DEV'
                        level={2}
                        icon={IconIdeas}
                        items={[SLUGS.overviewTMDevSummary, SLUGS.overviewTMDevSwitch]}
                    >
                        <MenuItem
                            id={SLUGS.overviewTMDevSummary}
                            title='Summary'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.overviewTMDevSummary)}
                        />
                        <MenuItem
                            id={SLUGS.overviewTMDevSwitch}
                            title='DNS Switch'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.overviewTMDevSwitch)}
                        />
                    </MenuItem>
                    <MenuItem
                        id={SLUGS.overviewTMQA}
                        title='QA'
                        level={2}
                        icon={IconIdeas}
                        items={[SLUGS.overviewTMQASummary, SLUGS.overviewTMQASwitch]}
                    >
                        <MenuItem
                            id={SLUGS.overviewTMQASummary}
                            title='Summary'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.overviewTMQASummary)}
                        />
                        <MenuItem
                            id={SLUGS.overviewTMQASwitch}
                            title='DNS Switch'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.overviewTMQASwitch)}
                        />
                    </MenuItem>
                    <MenuItem
                        id={SLUGS.overviewTMUAT}
                        title='UAT'
                        level={2}
                        icon={IconIdeas}
                        items={[SLUGS.overviewTMUATSummary, SLUGS.overviewTMUATSwitch]}
                    >
                        <MenuItem
                            id={SLUGS.overviewTMUATSummary}
                            title='Summary'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.overviewTMUATSummary)}
                        />
                        <MenuItem
                            id={SLUGS.overviewTMUATSwitch}
                            title='DNS Switch'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.overviewTMUATSwitch)}
                        />
                    </MenuItem>
                </MenuItem>
                <MenuItem
                    id={SLUGS.overviewAPExpand}
                    title='Appconfig'
                    icon={IconAppConfigurationLogo}
                />
            <div className={classes.div}>
                <p>Client Version: {Packagejson.version}</p>
                <p>Server Version: {!data ? "Loading..." : data}</p>
            </div>
        </Menu>
    );
}

export default SidebarComponent;
