import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const ServiceComponent = lazy(() => import('./services'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} render={() => <div>Dashboard</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
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
