import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: `auto`,
  },
});

export const Wrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  display: flex;
  & > label > .MuiButton-containedSecondary {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    font-size: 0.8em;
    padding: 0;
    margin: 0;
    min-width: 0;
    width: fit-content;
    padding: 5px;
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightOrange};
    }
  }
`;

export const StyledPaper = styled.div`
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.bittersweet} !important;
  background: ${({ theme }) => theme.colors.mostlyBlackBlue} !important;
  .MuiListItemIcon-root {
    color: ${({ theme }) => theme.colors.bittersweet} !important;
  }
  & > .MuiTypography-body1 {
    text-align: center !important;
  }
  & > .MuiListItem-root {
    justify-content: center;
    text-align: center;
  }
`;

export interface Route {
  route: string;
  icon: React.ReactElement;
  destination: string;
}

export const RoutesList: Route[] = [
  {
    route: `Home`,
    icon: <HomeIcon />,
    destination: `/`,
  },
  {
    route: `Quiz`,
    icon: <AccountCircleIcon />,
    destination: `/quiz`,
  },
  {
    route: `Add question`,
    icon: <MailIcon />,
    destination: `/questions/add`,
  },
];
