import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import Home from '../pages/Home'
import StackRoutes from './stack.routes'

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeBackgroundColor: '#2ccbb9',
      activeTintColor: '#FFF',
      marginTop: 16,
      labelStyle: {
        fontSize: 19,
      },
      
    }}>

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar link',
          drawerIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                name={focused ? "cube" : 'cube-outline'}
                color={color}
                size={size}
              />
            )
          }
        }}
      />
      
      <Drawer.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{
          title: 'Meus links',
          drawerIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                name={focused ? "stats-chart" : 'stats-chart-outline'}
                color={color}
                size={size}
              />
            )
          }
        }}
      />

    </Drawer.Navigator>
  )
}