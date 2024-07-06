import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import CoffeeData from '../data/CoffeeData'
import BeansData from '../data/BeansData'

interface CoffeeAppStore {
  CoffeeList: any,
  BeanList: any,
  FavoritesList: Record<any, any>,
  CartList: any,
  OrderHistoryList: any
}

export const coffeeAppStore = create<CoffeeAppStore>()(
  persist((set, get) => ({
    CoffeeList: CoffeeData,
    BeanList: BeansData,
    FavoritesList: [],
    CartList: [],
    OrderHistoryList: []
  }), {
    name: 'coffee-app',
    storage: createJSONStorage(() => AsyncStorage)
  })
)
