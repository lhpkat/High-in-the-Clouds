import { _RouteRecordBase } from 'vue-router';
import { Component } from 'vue'
declare module 'vue-router'{
    interface _RouteRecordBase{
        icon?: Component;
        title?: string;
    }
}
