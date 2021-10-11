import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const ServiceComponent = lazy(() => import('./services'));
const OverviewTMComponent = lazy(() => import('./overviewTM'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.overview} render={() => <div>Overview</div>} />
                <Route exact path={SLUGS.overviewTM} component={OverviewTMComponent} />
                <Route exact path={SLUGS.overviewTMDev} render={() => <div>Dev TM</div>} />
                <Route exact path={SLUGS.overviewTMDevSummary} render={() => <div>Dev TM Summary</div>} />
                <Route exact path={SLUGS.overviewTMDevSwitch} render={() => <div>Dev TM Switch</div>} />
                <Route exact path={SLUGS.overviewTMQA} render={() => <div>QA TM</div>} />
                <Route exact path={SLUGS.overviewTMUAT} render={() => <div>UAT TM</div>} />
                <Route exact path={SLUGS.overviewAP} render={() => <div>Appconfig</div>} />
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
