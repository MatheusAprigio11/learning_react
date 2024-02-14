function useLocalStorage(
	key: string,
	initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue 
    } catch (error) {
      console.log(error)
    }

    const setValue = (value: T) => {
      try {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.log(error);
      }
    }
  })

  return[storedValue, setValue] //finish this
}
