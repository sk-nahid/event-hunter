import React, { use } from 'react';
import { ApiContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const { userData, loading, setLoading } = use(ApiContext);
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (userData) {
       return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;