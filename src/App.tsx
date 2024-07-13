import {useState} from 'react'
import './App.css'
import {StorageService} from "./client/storage/storage.ts";
import Header from "./components/Header.tsx";

function App() {

    const [categories, setCategories] = useState<CategoryInterface[]>([])
    const getCategories = async () => {

        const result = await StorageService.getCategories({url : "http://localhost:2020/api/v1/categories/get"})
        setCategories(result.categories as CategoryInterface[])
    }


  return (
      <div>
          <Header></Header>
          <button onClick={getCategories}>Получить категории</button>
          <div>
              {categories.map(cat => {
                  return <h3>{cat.title}</h3>
              })}
          </div>
      </div>
  )
}

export default App
