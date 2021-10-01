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
                id={SLUGS.region}
                title='Region'
                icon={IconIdeas}
                items={[SLUGS.regionUS, SLUGS.regionWE, SLUGS.regionAU]}
            >
                <MenuItem
                    id={SLUGS.regionUS}
                    title='US'
                    level={2}
                    icon={IconIdeas}
                    items={[SLUGS.regionUSDev, SLUGS.regionUSQA, SLUGS.regionUSUAT]}
                >
                    <MenuItem
                        id={SLUGS.regionUS}
                        title='US-Environment'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionUS)}
                    />
                    <MenuItem
                        id={SLUGS.regionUSDev}
                        title='DEV'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionUSDev)}
                    />
                    <MenuItem
                        id={SLUGS.regionUSQA}
                        title='QA'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionUSQA)}
                    />
                    <MenuItem
                        id={SLUGS.regionUSUAT}
                        title='UAT'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionUSUAT)}
                    />
                    <MenuItem
                        id={SLUGS.regionUSSTG}
                        title='STAGE'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionUSSTG)}
                    />
                    <MenuItem
                        id={SLUGS.regionUSPRD}
                        title='PROD'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionUSPRD)}
                    />
                </MenuItem>
                <MenuItem
                    id={SLUGS.regionWE}
                    title='WE'
                    level={2}
                    icon={IconIdeas}
                    items={[SLUGS.regionWESTG, SLUGS.regionWEPRD]}
                >
                    <MenuItem
                        id={SLUGS.regionWE}
                        title='WE-Environment'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionWE)}
                    />
                    <MenuItem
                        id={SLUGS.regionWESTG}
                        title='STAGE'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionWESTG)}
                    />
                    <MenuItem
                        id={SLUGS.regionWEPRD}
                        title='PROD'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionWEPRD)}
                    />
                </MenuItem>
                <MenuItem
                    id={SLUGS.regionAU}
                    title='AU'
                    level={2}
                    icon={IconIdeas}
                    items={[SLUGS.regionAUPRD]}
                >
                    <MenuItem
                        id={SLUGS.regionAU}
                        title='AU-Environment'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionAU)}
                    />
                    <MenuItem
                        id={SLUGS.regionAUPRD}
                        title='PROD'
                        level={3}
                        icon={IconIdeas}
                        onClick={() => onClick(SLUGS.regionAUPRD)}
                    />
                </MenuItem>
            </MenuItem>
            <div className={classes.separator}></div>
        </Menu>
    );
}

export default SidebarComponent;
