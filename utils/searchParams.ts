export const updateSearchParams = (type: string, value: string) => {
    // Получить текущие параметры поиска URL
    const searchParams = new URLSearchParams(window.location.search);
  
    // Установить указанный параметр поиска в заданное значение
    searchParams.set(type, value);
  
    // Установить указанный параметр поиска в заданное значение
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  