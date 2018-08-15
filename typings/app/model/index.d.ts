// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import DriverOrders from '../../../app/model/driverOrders';
import Orders from '../../../app/model/orders';

declare module 'sequelize' {
  interface Sequelize {
    DriverOrders: ReturnType<typeof DriverOrders>;
    Orders: ReturnType<typeof Orders>;
  }
}
