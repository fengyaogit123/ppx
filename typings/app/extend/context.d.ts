// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import ExtendObject from '../../../app/extend/context';
declare module 'egg' {
  interface Context {
    error: typeof ExtendObject.error;
    success: typeof ExtendObject.success;
    validate: typeof ExtendObject.validate;
    HttpStatus: typeof ExtendObject.HttpStatus;
    QueryPage: typeof ExtendObject.QueryPage;
  }
}