// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import AliPay from '../../../app/service/aliPay';
import AppMsg from '../../../app/service/appMsg';
import Base from '../../../app/service/base';
import Cache from '../../../app/service/cache';
import Driver from '../../../app/service/driver';
import Merchant from '../../../app/service/merchant';
import Message from '../../../app/service/message';
import Orders from '../../../app/service/orders';
import Request from '../../../app/service/request';
import ServiceCate from '../../../app/service/serviceCate';
import ServiceItem from '../../../app/service/serviceItem';
import UserAddress from '../../../app/service/userAddress';
import UserCar from '../../../app/service/userCar';
import Users from '../../../app/service/users';
import WxPay from '../../../app/service/wxPay';
import ApiAlgorithm from '../../../app/service/api/algorithm';
import ApiAliPay from '../../../app/service/api/aliPay';
import ApiBase from '../../../app/service/api/base';
import ApiBaseData from '../../../app/service/api/baseData';
import ApiMessage from '../../../app/service/api/message';
import ApiOrder from '../../../app/service/api/order';
import ApiUser from '../../../app/service/api/user';
import ApiWxPay from '../../../app/service/api/wxPay';
import BOrder from '../../../app/service/b/order';
import COrder from '../../../app/service/c/order';
import CPrice from '../../../app/service/c/price';

declare module 'egg' {
  interface IService {
    aliPay: AliPay;
    appMsg: AppMsg;
    base: Base;
    cache: Cache;
    driver: Driver;
    merchant: Merchant;
    message: Message;
    orders: Orders;
    request: Request;
    serviceCate: ServiceCate;
    serviceItem: ServiceItem;
    userAddress: UserAddress;
    userCar: UserCar;
    users: Users;
    wxPay: WxPay;
    api: {
      algorithm: ApiAlgorithm;
      aliPay: ApiAliPay;
      base: ApiBase;
      baseData: ApiBaseData;
      message: ApiMessage;
      order: ApiOrder;
      user: ApiUser;
      wxPay: ApiWxPay;
    };
    b: {
      order: BOrder;
    };
    c: {
      order: COrder;
      price: CPrice;
    };
  }
}
