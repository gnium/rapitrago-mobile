import request from '../../utils/requests'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../store';

export interface Merchant {
    id: number;
    restaurantName: string;
    restaurantPhone: number;
    freedelivery: number;
    deliveryEstimation: number;
}

export interface MerchantState {
    merchantsList: Array<Merchant>;
    merchantsLoading: boolean;
    merchantsErrors: any;
}

// Slice
const slice = createSlice({
  name: 'merchants',
  initialState: {
      merchantsList: [],
      merchantsLoading: false,
      merchantsErrors: null,
  } as MerchantState,
  reducers: {
    requestMerchants: (state) => {
        state.merchantsLoading = true;
        state.merchantsErrors = null;
    },
    clearErrors: (state) => {
        state.merchantsLoading = false;
        state.merchantsErrors = null;
    },
    receiveMerchants: (state, action: PayloadAction<Array<Merchant>>) => {
        state.merchantsLoading = false;
        state.merchantsList = action.payload;
    },
    loginError: (state, action) => {
        state.merchantsLoading = false;
        state.merchantsErrors = action.payload;
    }
  },
});

export default slice.reducer

// Actions
const { requestMerchants, clearErrors, receiveMerchants, loginError } = slice.actions

export const getMerchants = () =>  async (dispatch: any)  => {
    console.log(store.getState());
    dispatch(requestMerchants());
    request({
        url:    '/merchants',
        method: 'GET',
        headers: {Authorization: store.getState().authentication.token}
      }).then((response) => {
          dispatch(receiveMerchants(response.data));
      });;
};
