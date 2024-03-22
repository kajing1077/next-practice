'use client';
import { createContext, useContext, useState } from 'react';


interface OrderContextType {
    order: any; // replace 'any' with the actual type of your order
    setOrder: (order: any) => void; // replace 'any' with the actual type of your order
}
export const OrderContext = createContext<OrderContextType | undefined>(undefined);


export function useOrder() {
    const context = useContext(OrderContext);
    if (!context) {
      throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
  }

export function OrderProvider({ children }) {
    const [order, setOrder] = useState(null);

    
    const value = {
        order,
        setOrder,
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
}