import React from 'react';
// import {Calendar} from 'react-native-calendario';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {View} from 'react-native';

import {NavigationHeader} from '../../components';

const CalendarScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <NavigationHeader Title="Calender" />
      <Calendar
        onChange={range => console.log(range)}
        minDate={new Date(2018, 3, 20)}
        startDate={new Date(2018, 3, 30)}
        endDate={new Date(2018, 4, 5)}
        numberOfMonths="1"
        theme={{
          activeDayColor: {},
          monthTitleTextStyle: {
            color: '#004277',
            fontWeight: '300',
            fontSize: 16,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            fontWeight: '200',
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            // paddingVertical: 10,
          },
          weekColumnTextStyle: {
            color: '#b6c1cd',
            fontSize: 13,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {},
          endDateContainerStyle: {},
          dayContainerStyle: {},
          dayTextStyle: {
            color: '#2d4150',
            fontWeight: '200',
            fontSize: 15,
          },
          dayOutOfRangeContainerStyle: {},
          dayOutOfRangeTextStyle: {},
          todayContainerStyle: {
            backgroundColor: '#004277',
            borderRadius: 70,
          },
          todayTextStyle: {
            color: '#FFFFFF',
          },
          activeDayContainerStyle: {
            backgroundColor: '#004277',
          },
          activeDayTextStyle: {
            color: 'white',
          },
          nonTouchableLastMonthDayTextStyle: {},
        }}
      />
    </View>
  );
};
export default CalendarScreen;
