import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import {
    IconIdeas,
    IconOverview,
    IconSubscription
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
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

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
            />
            <MenuItem
                id={SLUGS.environment}
                title='Environment'
                icon={IconIdeas}
                items={[SLUGS.regionUSDev, SLUGS.regionUSQA]}
            >
                <MenuItem
                    id={SLUGS.regionUSDev}
                    title='US-DEV'
                    level={2}
                    icon={IconIdeas}
                    onClick={() => onClick(SLUGS.regionUSDev)}
                />
                <MenuItem
                    id={SLUGS.regionUSQA}
                    title='US-QA'
                    level={2}
                    icon={IconIdeas}
                    onClick={() => onClick(SLUGS.regionUSQA)}
                />
            </MenuItem>
            <div className={classes.separator}></div>
        </Menu>
    );
}

export default SidebarComponent;
