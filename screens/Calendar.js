import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pk'] = {
  monthNames: [
    'Janvāris',
    'Februāris',
    'Marts',
    'Aprīlis',
    'Maijs',
    'Jūnijs',
    'Jūlijs',
    'Augusts',
    'Septembris',
    'Oktobris',
    'Novembris',
    'Decembris'
  ],
  dayNames: ['Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena', 'Svētdiena'],
  dayNamesShort: ['P', 'Ot', 'Tr', 'Ce', 'Pk', 'S', 'Sv'],
  today: "Šodien"
};
LocaleConfig.defaultLocale = 'pk';

const CalendarView = ()=> {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>Select your event</Text>
<Calendar
  current={'2022-01-13'}
  minDate={'2022-01-13'}
  onDayPress={day => {
    console.log('selected day', day);
  }}
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  hideArrows={false}
  onPressArrowLeft={subtractMonth => subtractMonth()}
  onPressArrowRight={addMonth => addMonth()}
  disableAllTouchEventsForDisabledDays={true}
  enableSwipeMonths={true}

  theme={{
    backgroundColor: '#296460',
    calendarBackground:'#296460',
    selectedDayBackgroundColor: '#00adf5',
    monthTextColor: '#ffffff',
    textMonthFontWeight: 'bold',
    textDayFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    height: '300',
    textDisabledColor: '#290000',
    dayTextColor: '#ffffff',
  }}
  
markingType={'period'}
  markedDates={{
    '2022-02-20': {disabled: true, startingDay: true, color: '#ffffff', endingDay: true},
    '2022-01-13': {disabled: true, startingDay: true, color: '#ffffff', endingDay: true},
    '2022-01-15': {disabled: true, startingDay: true, color: '#ffffff', endingDay: true},
    '2022-01-24': {disabled: true, startingDay: true, color: '#ffffff', endingDay: true}
  }}
/>
<Calendar 
current={'2022-01-13'}
  minDate={'2022-01-13'}
  onDayPress={day => {
    console.log('selected day', day);
  }}
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  hideArrows={false}
  onPressArrowLeft={subtractMonth => subtractMonth()}
  onPressArrowRight={addMonth => addMonth()}
  disableAllTouchEventsForDisabledDays={true}
  enableSwipeMonths={true}



  theme={{
    backgroundColor: '#296460',
    calendarBackground:'#296460',
    selectedDayBackgroundColor: '#00adf5',
    monthTextColor: '#ffffff',
    textMonthFontWeight: 'bold',
    textDayFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    height: '300',
    textDisabledColor: '#290000',
    dayTextColor: '#ffffff',

  }}

  markingType={'period'}
  markedDates={{
        '2022-01-15': {disabled: true, startingDay: true, color: 'yellow', endingDay: true},
    '2022-01-24': {disabled: true, startingDay: true, color: 'yellow', endingDay: true}
  }}
/>
    </View>
);
}

export default CalendarView;

const styles = StyleSheet.create({
  container: {
        paddingTop: 20,
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#296460',
        alignItems: "center",
        padding: 8,
  },
  paragraph: {
    margin: 2,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});