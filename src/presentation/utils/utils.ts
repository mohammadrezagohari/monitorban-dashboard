// Local Storage
export const setToLocalStorage = (key: string, value: any) => {
    if (typeof window === "undefined") return null;
    localStorage.setItem(`monitorban-${key}`, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key: string) => {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(`monitorban-${key}`);
    return value ? JSON.parse(value) : null;
  };
  
  export const removeFromLocalStorage = (key: string) => {
    if (typeof window === "undefined") return null;
    localStorage.removeItem(`monitorban-${key}`);
  };