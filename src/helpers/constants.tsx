import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Route } from '@/interfaces';

export const QUESTION_DEFAULT_VALUES = {
  question: null,
  answer1: null,
  answer2: null,
  answer3: null,
  answer4: null,
  correctAnswer: null,
};

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

export const DUMMY_QUESTION = {
  question: ``,
  answers: [],
};

export const DB_URL = `http://localhost:8080`;
