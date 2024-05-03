import { create } from "zustand";

export const useStoreList = create( () => ({
    data: [
        {
            id: 0,
            name: "LIGHT POMADE",
            price: 150000,
            image: 'https://img.id.my-best.com/product_images/55bde6ddadc48c4ecbb1a593e4ef776a.jpeg?ixlib=rails-4.3.1&q=45&lossless=0&w=160&h=160&fit=clip&s=955d3dc395d9966aa988ae727666e6b9'
        },
        {
            id: 1,
            name: "MEDIUM POMADE",
            price: 200000,
            image: 'https://img.id.my-best.com/product_images/6b3ccd8696542564c525c5e80a9d37d7.png?ixlib=rails-4.3.1&q=45&lossless=0&w=160&h=160&fit=clip&s=b6de44d3c21db7fe885e70d5a6fdb03b'
        },
        {
            id: 2,
            name: "STRONG POMADE",
            price: 250000,
            image: 'https://img.id.my-best.com/product_images/07b8f4e9edec5e2b8fbfaf5d9cfc5655.jpeg?ixlib=rails-4.3.1&q=45&lossless=0&w=160&h=160&fit=clip&s=e0193828da8553a8e58de038de128c22'
        }
    ]
}) 
)