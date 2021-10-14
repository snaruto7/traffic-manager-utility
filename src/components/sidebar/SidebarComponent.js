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
    IconTrafficManagerLogo,
    IconVaultLogo,
    IconJiraLogo,
    IconPipelinesLogo
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
                onClick={() => onClick(SLUGS.overview)}
            >
            </MenuItem>
            <div className={classes.separator}></div>
            <MenuItem
                    id={SLUGS.TMExpand}
                    title='Traffic-Manager'
                    icon={IconTrafficManagerLogo}
                    children={[SLUGS.TMDev, SLUGS.TMQA, SLUGS.TMUAT]}
                >
                    <MenuItem
                        id={SLUGS.TMDev}
                        title='DEV'
                        level={2}
                        icon={IconIdeas}
                        items={[SLUGS.TMDevSummary, SLUGS.TMDevSwitch]}
                    >
                        <MenuItem
                            id={SLUGS.TMDevSummary}
                            title='Summary'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.TMDevSummary)}
                        />
                        <MenuItem
                            id={SLUGS.TMDevSwitch}
                            title='DNS Switch'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.TMDevSwitch)}
                        />
                    </MenuItem>
                    <MenuItem
                        id={SLUGS.TMQA}
                        title='QA'
                        level={2}
                        icon={IconIdeas}
                        items={[SLUGS.TMQASummary, SLUGS.TMQASwitch]}
                    >
                        <MenuItem
                            id={SLUGS.TMQASummary}
                            title='Summary'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.TMQASummary)}
                        />
                        <MenuItem
                            id={SLUGS.TMQASwitch}
                            title='DNS Switch'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.TMQASwitch)}
                        />
                    </MenuItem>
                    <MenuItem
                        id={SLUGS.TMUAT}
                        title='UAT'
                        level={2}
                        icon={IconIdeas}
                        items={[SLUGS.TMUATSummary, SLUGS.TMUATSwitch]}
                    >
                        <MenuItem
                            id={SLUGS.TMUATSummary}
                            title='Summary'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.TMUATSummary)}
                        />
                        <MenuItem
                            id={SLUGS.TMUATSwitch}
                            title='DNS Switch'
                            level={3}
                            icon={IconTrafficManagerLogo}
                            onClick={() => onClick(SLUGS.TMUATSwitch)}
                        />
                    </MenuItem>
                </MenuItem>
                <MenuItem
                    id={SLUGS.APExpand}
                    title='Appconfig'
                    icon={IconAppConfigurationLogo}
                    onClick={() => onClick(SLUGS.APExpand)}
                />
                <MenuItem
                    id={SLUGS.Vault}
                    title='Vault'
                    icon={IconVaultLogo}
                    onClick={() => onClick(SLUGS.Vault)}
                />
                <MenuItem
                    id={SLUGS.Jira}
                    title='Jira'
                    icon={IconJiraLogo}
                    onClick={() => onClick(SLUGS.Jira)}
                />
                <MenuItem
                    id={SLUGS.Pipelines}
                    title='Release Pipelines'
                    icon={IconPipelinesLogo}
                    onClick={() => onClick(SLUGS.Pipelines)}
                />
                <MenuItem
                    id={SLUGS.Connections}
                    title='Connection Status'
                    icon={IconAppConfigurationLogo}
                    onClick={() => onClick(SLUGS.Connections)}
                />
            <div className={classes.div}>
                <p>Client Version: {Packagejson.version}</p>
                <p>Server Version: {!data ? "Loading..." : data}</p>
            </div>
        </Menu>
    );
}

export default SidebarComponent;
