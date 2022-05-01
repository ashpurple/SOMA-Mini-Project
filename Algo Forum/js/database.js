const onRequest = indexedDB.open('post', 1);

    onRequest.onupgradeneeded = () => {
      const database = onRequest.result
      database.createObjectStore('post', { keyPath: "myKey" }/*{autoIncrement: true}*/)

    }

    onRequest.onerror = () => {
      alert('Error creating or accessing db')
    }

const addEntryToDb = (storeName, entry) => {
  const database = onRequest.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)


  transaction.onerror = () => {
    console.log(`error adding Entry to ${storeName}.`)
    console.log(transaction.error);
  }
}

const getEntryFromDb = (storeName, id) => {
  const data = new Promise((resolve, reject) => {
    const database = onRequest.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const request = id ? store.get(id) : store.getAll()
    
    request.onerror = () => {
      reject(request.error)
      console.log('error getting data from the store');
    }

    request.onsuccess = () => {
      resolve(request.result)
    }
  })

  return Promise.resolve(data)
}

const clearAllEntries = (storeName) => {
  const database = onRequest.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}

const _onRequest = onRequest;
export { _onRequest as onRequest };
const _addEntryToDb = addEntryToDb;
export { _addEntryToDb as addEntryToDb };
const _getEntryFromDb = getEntryFromDb;
export { _getEntryFromDb as getEntryFromDb };
const _clearAllEntries = clearAllEntries;
export { _clearAllEntries as clearAllEntries };