// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import AliPay from '../../../app/controller/aliPay';
import AppMsg from '../../../app/controller/appMsg';
import Base from '../../../app/controller/base';
import CarInfo from '../../../app/controller/carInfo';
import Dashboard from '../../../app/controller/dashboard';
import Dealcar from '../../../app/controller/dealcar';
import Driver from '../../../app/controller/driver';
import Home from '../../../app/controller/home';
import Im from '../../../app/controller/im';
import Merchant from '../../../app/controller/merchant';
import MovingCar from '../../../app/controller/movingCar';
import Orders from '../../../app/controller/orders';
import Payment from '../../../app/controller/payment';
import Price from '../../../app/controller/price';
import ServiceBase from '../../../app/controller/serviceBase';
import ServiceCate from '../../../app/controller/serviceCate';
import ServiceItem from '../../../app/controller/serviceItem';
import System from '../../../app/controller/system';
import UserAddress from '../../../app/controller/userAddress';
import UserCar from '../../../app/controller/userCar';
import Users from '../../../app/controller/users';
import WxPay from '../../../app/controller/wxPay';
import BCustomer from '../../../app/controller/b/customer';
import BOrder from '../../../app/controller/b/order';
import COrder from '../../../app/controller/c/order';

declare module 'egg' {
  interface IController {
    aliPay: AliPay;
    appMsg: AppMsg;
    base: Base;
    carInfo: CarInfo;
    dashboard: Dashboard;
    dealcar: Dealcar;
    driver: Driver;
    home: Home;
    im: Im;
    merchant: Merchant;
    movingCar: MovingCar;
    orders: Orders;
    payment: Payment;
    price: Price;
    serviceBase: ServiceBase;
    serviceCate: ServiceCate;
    serviceItem: ServiceItem;
    system: System;
    userAddress: UserAddress;
    userCar: UserCar;
    users: Users;
    wxPay: WxPay;
    b: {
      customer: BCustomer;
      order: BOrder;
    };
    c: {
      order: COrder;
    };
  }
}
