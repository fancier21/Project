import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { recovery } from './recovery'
import { checkToken } from './checkToken'
import { reset } from './reset'
import { settings } from './settings'
import { help } from './help'
import { projects } from './projects'
import { sidebars } from './sidebars'

const reducer = combineReducers({
  authentication,
  recovery,
  checkToken,
  reset,
  projects,
  settings,
  help,
  sidebars
});

export default reducer;
