import WithoutContext from './components/WithoutContext';
import WithContext from './components/WithContext';


const routes = [
  {
    id: 1,
    path: '/withoutContext',
    component: WithoutContext,
  },
  {
    id: 2,
    path: '/withContext',
    component: WithContext,
  }
];

export default routes;