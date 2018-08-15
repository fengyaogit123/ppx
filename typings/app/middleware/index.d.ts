// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import AccessLogger from '../../../app/middleware/accessLogger';
import CheckDesignatedLogin from '../../../app/middleware/checkDesignatedLogin';
import CheckDesignatedToken from '../../../app/middleware/checkDesignatedToken';
import CheckDriverLogin from '../../../app/middleware/checkDriverLogin';
import CheckDriverToken from '../../../app/middleware/checkDriverToken';
import CheckLogin from '../../../app/middleware/checkLogin';
import CheckMerchantLogin from '../../../app/middleware/checkMerchantLogin';
import CheckMerchantToken from '../../../app/middleware/checkMerchantToken';
import CheckOperateLogin from '../../../app/middleware/checkOperateLogin';
import CheckOperateToken from '../../../app/middleware/checkOperateToken';
import CheckToken from '../../../app/middleware/checkToken';
import ErrorHandler from '../../../app/middleware/errorHandler';
import HttpProxy from '../../../app/middleware/httpProxy';
import Logger from '../../../app/middleware/logger';
import Ratelimit from '../../../app/middleware/ratelimit';
import Track from '../../../app/middleware/track';

declare module 'egg' {
  interface IMiddleware {
    accessLogger: typeof AccessLogger;
    checkDesignatedLogin: typeof CheckDesignatedLogin;
    checkDesignatedToken: typeof CheckDesignatedToken;
    checkDriverLogin: typeof CheckDriverLogin;
    checkDriverToken: typeof CheckDriverToken;
    checkLogin: typeof CheckLogin;
    checkMerchantLogin: typeof CheckMerchantLogin;
    checkMerchantToken: typeof CheckMerchantToken;
    checkOperateLogin: typeof CheckOperateLogin;
    checkOperateToken: typeof CheckOperateToken;
    checkToken: typeof CheckToken;
    errorHandler: typeof ErrorHandler;
    httpProxy: typeof HttpProxy;
    logger: typeof Logger;
    ratelimit: typeof Ratelimit;
    track: typeof Track;
  }
}
