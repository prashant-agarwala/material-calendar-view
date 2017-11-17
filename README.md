
# react-native-material-calendar-view

## Getting started

`$ npm install --save git+https://github.com/prashant-agarwala/material-calendar-view.git`


### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`

    ```
      import com.prashant_agarwala.material_calendar_view.RNMaterialCalendarViewPackage; // add this

      public class MainApplication extends Application implements ReactApplication {

          @Override
          protected List<ReactPackage> getPackages() {
              return Arrays.<ReactPackage>asList(
                  new MainReactPackage(),
                  new RNMaterialCalendarViewPackage()     // add this
              );
          }
      }
    ```

2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-material-calendar-view'
  	project(':react-native-material-calendar-view').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-material-calendar-view/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:

  	```
      compile project(':react-native-material-calendar-view')
  	```

## Usage
```
import MaterialCalendar from 'react-native-material-calendar-view';


render() {
    return (
      <View style={styles.container}>
        <MaterialCalendar
          style={styles.calendarView}
          onDateChange={dateObject => {
            console.log(dateObject);
          }}
          day={20}
          month={4}
          year={2017}
        />
      </View>
    );
}

```
