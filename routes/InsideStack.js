import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/home';
import SkillScreen from '../screens/skills';
import ProjectScreen from '../screens/projects';
import AboutMeScreen from '../screens/aboutMe';
import Test from '../screens/test';

const Tab = createBottomTabNavigator();

export function InsideStack() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#4289e5',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/img/icon/icon-home.png')}
                style={{ width: 24, height: 24, tintColor: focused ? '#4289e5' : 'gray' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillScreen}
          options={{
            tabBarLabel: 'Skills',
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/img/home/skill.png')}
                style={{ width: 24, height: 24, tintColor: focused ? '#4289e5' : 'gray' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Project"
          component={ProjectScreen}
          options={{
            tabBarLabel: 'Project',
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/img/icon/icon-project.png')}
                style={{ width: 24, height: 24, tintColor: focused ? '#4289e5' : 'gray' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About Me"
          component={AboutMeScreen}
          options={{
            headerShown:false,
            tabBarLabel: 'About Me',
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/img/icon/icon-aboutMe.png')}
                style={{ width: 24, height: 24, tintColor: focused ? '#4289e5' : 'gray' }}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Test"
          component={Test}
          options={{
            headerShown:false,
            tabBarLabel: 'Test',
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/img/icon/icon-aboutMe.png')}
                style={{ width: 24, height: 24, tintColor: focused ? '#4289e5' : 'gray' }}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
  );
}