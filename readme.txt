26.11.2021//rnbegin0_mash_course
The Complete React Native Course 2021 : from Zero to Hero
https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
===========================================================================
//26.11.2021 //https://reactnavigation.org/docs/getting-started/
  *** переключення між екранами
    npm install @react-navigation/native
    npm install @react-navigation/native-stack
------------------------------------------------------------------------------------------
* Stack Navigator/ Stack.Navigator //https://reactnavigation.org/docs/stack-navigator
    npm install react-native-screens react-native-safe-area-context
------------------------------------------------------------------------------------------
* Bottom Tabs Navigator/ Tab.Navigator //https://reactnavigation.org/docs/tab-based-navigation/
    npm i @react-navigation/bottom-tabs
    ***// fontawesome
    npm i --save react-native-svg # **
    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons //Безкоштовні іконки
    npm i --save @fortawesome/free-brands-svg-icons //Безкоштовні іконки
    npm i --save @fortawesome/react-native-fontawesome
------------------------------------------------------------------------------------------
* Material Bottom Tabs Navigator/
    npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
------------------------------------------------------------------------------------------
* Material Top Tabs Navigator //https://reactnavigation.org/docs/material-top-tab-navigator
    npm install @react-navigation/material-top-tabs react-native-tab-view
    npm install react-native-pager-view
------------------------------------------------------------------------------------------
* Drawer Navigator //https://reactnavigation.org/docs/drawer-navigator
    npm install @react-navigation/drawer
    npm install react-native-gesture-handler react-native-reanimated
------------------------------------------------------------------------------------------
* Custom Fonts in RN CLI (3:02:17)
    https://fonts.google.com/
    //react-native.config.js
    module.exports={
        asserts:['./assets/fonts']
    }
    npx react-native link  !!!!-привязка пакета
-------------------------------------------------------------------------------------------
* Global Styles&How to Use Costom Fonts Globally in Progect (3:10:11)
    https://react-native-async-storage.github.io/async-storage/docs/install
    npm install @react-native-async-storage/async-storage
-------------------------------------------------------------------------------------------
* AsyncStorage-How to Make an Offline Login with Async Storage (3:15:02)	https://react-native-async-storage.github.io/async-storage/docs/install
        Unencrypted, Asynchronous, Persistent, Key-Value Storege System/Незашифрована, асинхронна, постійна система зберігання ключів
        Global Local Storage/Глобальне локальне сховище	Dont use it to store secrets
        Ofline local storage /локальне сховище в автономному режимі
	    npm install @react-native-async-storage/async-storage
---------------------------------------------------------------------------------------------
* SQLite Database-Hov to Make an Ofine Login with SQLite(3:32:32)	https://www.sqlitetutorial.net/
        npm install --save react-native-sqlite-storage
        зв’язати react-native-sqlite-storage з проектом:
        react-native link





