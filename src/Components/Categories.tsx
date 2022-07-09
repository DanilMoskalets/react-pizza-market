import React, { useState} from 'react';
import {v1} from "uuid";

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    let categoriesName = [
        {name: 'Все', id: v1()},
        {name: 'Мясные', id: v1()},
        {name: 'Вегетарианская', id: v1()},
        {name: 'Гриль', id: v1()},
        {name: 'Острые', id: v1()},
        {name: 'Закрытые', id: v1()},
    ]

    const changeActiveIndex = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {categoriesName.map((categories, index) => {
                        return (
                            <li
                                key={categories.id} onClick={() => changeActiveIndex(index)}
                                className={activeIndex === index ? 'active' : ''}> {categories.name}
                            </li>
                        )
                    }
                  )
                }

            </ul>
        </div>
    );
};

export default Categories;