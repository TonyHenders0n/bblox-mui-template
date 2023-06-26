import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SvgIcon } from '@mui/material';
import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';
import { Search } from '@mui/icons-material';

export interface Item {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(
    () => {
      return [
        {
          items: [
            {
              title: t(tokens.nav.overview),
              path: paths.dashboard.index,
              icon: (
                <SvgIcon fontSize="small">
                  <HomeSmileIcon />
                </SvgIcon>
              )
            } 
          ]
        },
        {
          subheader: t(tokens.nav.assignedSchools),
          items: [
            {
              // title: t(tokens.nav.customers),
              title: 'Assigned',
              path: paths.dashboard.academy.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Search />
                </SvgIcon>
              )
            } ,
            {
              // title: t(tokens.nav.customers),
              title: 'Manage',
              path: paths.dashboard.customers.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Users03Icon />
                </SvgIcon>
              ),
              items: [
                { 
                  // title: t(tokens.nav.list),
                  title: 'Oakridge Educational Unit',
                  path: paths.dashboard.customers.index
                },
                {
                  title: t(tokens.nav.details),
                  path: paths.dashboard.customers.details
                },
                {
                  title: t(tokens.nav.edit),
                  path: paths.dashboard.customers.edit
                }
              ]
            } 
          ]
        },
        {
          subheader: 'Cohort',
          items: [
            {
              // title: t(tokens.nav.customers),
              title: 'Schools/Facilities',
              path: paths.dashboard.academy.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Search />
                </SvgIcon>
              )
            } ,
            {
              // title: t(tokens.nav.customers),
              title: 'Summary/Download',
              path: paths.dashboard.customers.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Users03Icon />
                </SvgIcon>
              ) 
            } 
          ]
        } ,
        {
          subheader: 'Admin',
          items: [
            {
              // title: t(tokens.nav.customers),
              title: 'Dashboard',
              path: paths.dashboard.srsAdmin.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Search />
                </SvgIcon>
              )
            } ,
            {
              // title: t(tokens.nav.customers),
              title: 'Communication',
              path: paths.dashboard.customers.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Users03Icon />
                </SvgIcon>
              ) 
            } 
          ]
        } 
      ];
    },
    [t]
  );
};
