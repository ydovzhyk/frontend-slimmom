import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDay, axiosDeleteDay, axiosDayInfo, axiosPeriodInfo, axiosDayEatenProduct } from 'api/day';

export const deleteEatenProduct = createAsyncThunk(
  'day/delete',
  async (userDataId, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        dairyCalendar: { date },
      } = getState();

      const {
        dayProduct: {
          aboutDay: { id },
        },
      } = getState();

      const {
        auth: { accessToken },
      } = getState();

      const result = await axiosDeleteDay(
        {
          dayId: id,
          eatenProductId: userDataId,
        },
        accessToken
      );
      dispatch(getInfoByDay({ date }));
      dispatch(getInfoByPeriod());
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getInfoByDay = createAsyncThunk(
  'day/info',
  async (date, { rejectWithValue }) => {
    try {
      const result = await axiosDayInfo(date);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getInfoByPeriod = createAsyncThunk(
  'day/period',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axiosPeriodInfo();
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const postEatenProduct = createAsyncThunk(
  'day',
  async (data, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        dairyCalendar: { date },
      } = getState();
      const result = await axiosDay(data);
      dispatch(getInfoByDay({ date }));
      dispatch(getInfoByPeriod());
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getEatenProduct = createAsyncThunk(
  'day/product',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        dairyCalendar: { date },
      } = getState();
      const result = await axiosDayEatenProduct(date);
      dispatch(getInfoByDay({ date }));
      dispatch(getInfoByPeriod());
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);