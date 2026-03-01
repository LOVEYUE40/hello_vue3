// 定义一个接口，用于限制person对象的具体属性
export interface PersonInter{
    id: string,
    name: string,
    age: number,
}

// 定义一个自定义类型Persons，用于表示一个人对象的数组
export type Persons = PersonInter[]