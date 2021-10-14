import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const ServiceComponent = lazy(() => import('./services'));
const OverviewTMComponent = lazy(() => import('./overviewTM'));
const OverviewComponent = lazy(() => import('./overview'));
const TMSummary = lazy(() => import('./TMSummary'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.overview} component={OverviewComponent} />
                <Route exact path={SLUGS.TMExpand} component={OverviewTMComponent} />
                <Route exact path={SLUGS.TMDev} render={() => <div>Dev TM</div>} />
                <Route exact path={SLUGS.TMDevSummary}> <TMSummary env="dev"/> </Route>
                <Route exact path={SLUGS.TMDevSwitch} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.TMQA} render={() => <div>QA TM</div>} />
                <Route exact path={SLUGS.TMQASummary}> <TMSummary env="qa"/> </Route>
                <Route exact path={SLUGS.TMQASwitch} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.TMUAT} render={() => <div>UAT TM</div>} />
                <Route exact path={SLUGS.TMUATSummary}> <TMSummary env="uat"/> </Route>
                <Route exact path={SLUGS.TMUATSwitch} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.APExpand} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.Vault} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.Jira} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.Connections} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.Pipelines} render={() => <div>Coming Soon.....</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.regionUSDev} component={ServiceComponent} />
                <Route exact path={SLUGS.regionUSQA} component={ServiceComponent} />
                <Route exact path={SLUGS.environment} render={() => <div>region</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
