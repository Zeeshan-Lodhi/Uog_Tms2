// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Buses',
    path: '/dashboard/buses',
    icon: getIcon('material-symbols:directions-bus-outline-rounded'),
  },
  {
    title: 'Students',
    path: '/dashboard/students',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Driver',
    path: '/dashboard/drivers',
    icon: getIcon('eva:people-fill'),
  },
  // {
  //   title: 'Logout',
  //   path: "",
  //   icon: getIcon('eva:log-out-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
