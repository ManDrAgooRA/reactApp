import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, ResponsiveContext } from 'grommet';
import { Sidebar } from '@/sharedComponents/Sidebar/Sidebar';
import { ADMIN_PATHS } from '@/admin/constants/routes';
import { AllAdminRoutes } from '@/admin/routes/AllAdminRoutes';
import { getAdminTabs } from '@/admin/utlis/getAdminTabs';
import './admin.scss';

export const AdminPage = () => {
  const params = useParams();
  const [activeLink, setActiveLink] = useState(getAdminTabs(params));

  const allTabs = [
    { title: 'Users', path: `${ADMIN_PATHS.adminUsers}/1` },
    { title: 'Goods', path: `${ADMIN_PATHS.adminGoods}/1` },
  ];

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Grid
          columns={size !== 'small' ? ['1/4', 'flex'] : ['full']}
          gap="small"
          className="main"
        >
          <Sidebar>
            <ul className="admin-tabs">
              {allTabs.map((item, i) => {
                return (
                  <li key={item.title} onClick={() => setActiveLink(i)}>
                    <Link
                      to={item.path}
                      className={
                        activeLink === i
                          ? 'admin-tab admin-tab__active'
                          : 'admin-tab'
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Sidebar>

          <div className="tabs">
            <AllAdminRoutes />
          </div>
        </Grid>
      )}
    </ResponsiveContext.Consumer>
  );
};
