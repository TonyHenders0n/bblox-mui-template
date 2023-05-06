import { Box, List, Stack, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import { CustomDrawerItem, DrawerNavigationItem, DrawerSize } from "../drawer.types";
import { DrawerSubheader } from "../drawer-subheader";
import { DrawerItem } from "../drawer-item/drawer-item";
import { useDrawer } from "../drawer-provider";
import { SideNavItem } from "src/layouts/dashboard/vertical-layout/side-nav-item";
 

export interface DrawerSectionProps {
  /**
   * Section title
   */
  title?: string;
  /**
   * List of items of that section
   */
  items: DrawerNavigationItem[];
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
}

interface SideNavSectionProps {
  items?: CustomDrawerItem[];
  pathname?: string | null;
  subheader?: string;
  size?: DrawerSize;
  title?: string;
}



const renderItems = ({
  depth = 0,
  items,
  pathname
}: {
  depth?: number;
  items: CustomDrawerItem[];
  pathname?: string | null;
}): JSX.Element[] => items.reduce(
  (acc: JSX.Element[], item) => reduceChildRoutes({
    acc,
    depth,
    item,
    pathname
  }),
  []
);

const reduceChildRoutes = ({
  acc,
  depth,
  item,
  pathname
}: {
  acc: JSX.Element[];
  depth: number;
  item: CustomDrawerItem;
  pathname?: string | null;
}): Array<JSX.Element> => {
  const checkPath = !!(item.path && pathname);
  const partialMatch = checkPath ? pathname.includes(item.path!) : false;
  const exactMatch = checkPath ? pathname === item.path : false;

  if (item.items) {
    acc.push(
      <SideNavItem
        active={partialMatch}
        depth={depth}
        disabled={item.disabled}
        icon={item.icon}
        key={item.title}
        label={item.label}
        open={partialMatch}
        title={item.title}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0
          }}
        >
          {renderItems({
            depth: depth + 1,
            items: item.items,
            pathname
          })}
        </Stack>
      </SideNavItem>
    );
  } else {
    acc.push(
      <SideNavItem
        active={exactMatch}
        depth={depth}
        disabled={item.disabled}
        external={item.external}
        icon={item.icon}
        key={item.title}
        label={item.label}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

/**
 * Render a group of items inside the drawer
 * with an optional title
 */
export const DrawerSection = ({
  title,
  items = [],
  size = "medium",
  // pathname,
  // subheader
}: DrawerSectionProps) => {
  const { state } = useDrawer();
  const { spacing } = useTheme();
  return (
    <>
      <Stack
        component="ul"
        spacing={0.5}
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
        }}
        // {...other}
      >
        {title && state === "open" && (
          <Box
            component="li"
            sx={{
              color: "var(--nav-section-title-color)",
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.66,
              mb: 1,
              ml: 1,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Box>
        )}
        {/* {renderItems({ items, pathname })} */}
        <List
          sx={{
            paddingTop: size === "small" ? spacing(0) : undefined,
            paddingY: state === "collapse" ? 0 : undefined,
          }}
        >
          {items.map((item) => (
            <DrawerItem
              key={item.id}
              item={item}
              size={size}
            />
          ))}
        </List>
      </Stack>
      {/* {title && state === "open" && (
        <DrawerSubheader
          size={size}
          role="heading"
        >
          {title}
        </DrawerSubheader>
      )}
      <List
        sx={{
          paddingTop: size === "small" ? spacing(0) : undefined,
          paddingY: state === "collapse" ? 0 : undefined,
        }}
      >
        {items.map((item) => (
          <DrawerItem
            key={item.id}
            item={item}
            size={size}
          />
        ))}
      </List> */}
    </>
  );
};
